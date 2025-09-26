const express=require('express');
const cors=require('cors');
const http = require("http");
const { Server } = require("socket.io");
const compression=require('compression');
const helmet= require('helmet');
const app=express();
const userRoutes=require('./routes/userRoute');
const PORT=process.env.PORT||8000;
app.use(helmet())
app.use(express.json());
app.use(compression());
app.use(cors())
const connectDB = require("./config/dbConnection");
app.use("/api/users", userRoutes);
require('dotenv').config();
connectDB();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
const pollStudentCount = {};
const pollAnswerCount = {};  
const pollAnswers = {};    
const pollStudentSockets = {};

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("create-poll", ({ pollData }) => {
    try {
      if (!pollData.question || !pollData.options || !Array.isArray(pollData.options)) {
        throw new Error("Invalid poll data");
      }
      console.log("Poll created:", pollData);
      io.emit("new-poll", pollData);
    } catch (err) {
      console.error("Error in create-poll event:", err.message);
      socket.emit("error", { message: err.message });
    }
  });

  socket.on("student-join", ({ studentName, studentId, pollId }) => {
    try {
      if (!studentId || !studentName || !pollId) throw new Error("studentData is required");
      socket.join(pollId);
      if (!pollStudentSockets[pollId]) pollStudentSockets[pollId] = {};
      pollStudentSockets[pollId][studentId] = { socketId: socket.id, studentName };
      pollStudentCount[pollId] = Object.keys(pollStudentSockets[pollId]).length;
      const studentList = Object.entries(pollStudentSockets[pollId]).map(
        ([id, data]) => ({ studentId: id, studentName: data.studentName })
      );
      io.to(pollId).emit("update-student-list", studentList);

      console.log(`Student ${studentName} joined poll ${pollId}`);
    } catch (err) {
      console.error(err.message);
      socket.emit("error", { message: err.message });
    }
  });

  socket.on("remove-student", ({ pollId, studentId }) => {
    try {
      if (!pollStudentSockets[pollId] || !pollStudentSockets[pollId][studentId]) return;
      const { socketId } = pollStudentSockets[pollId][studentId];
      io.to(socketId).emit("kicked", { message: "You are removed from the poll" });
      delete pollStudentSockets[pollId][studentId];
      pollStudentCount[pollId] = Object.keys(pollStudentSockets[pollId]).length;
      const studentList = Object.entries(pollStudentSockets[pollId]).map(
        ([id, data]) => ({ studentId: id, studentName: data.studentName })
      );
      io.to(pollId).emit("update-student-list", studentList);
      console.log(`Student ${studentId} removed from poll ${pollId}`);
    } catch (err) {
      console.error(err.message);
      socket.emit("error", { message: err.message });
    }
  });

  socket.on("submit-answer", ({ studentId, answer, pollId, options }) => {
    try {
      if (!studentId || !answer || !pollId || !options) throw new Error("StudentId, answer, pollId or options missing");
      if (!pollAnswerCount[pollId]) pollAnswerCount[pollId] = 0;
      if (!pollAnswers[pollId]) {
        pollAnswers[pollId] = {};
        options.forEach(opt => (pollAnswers[pollId][opt] = 0));
      }
      pollAnswerCount[pollId]++;
      pollAnswers[pollId][answer]++;
      console.log(`Answer received from ${studentId} for poll ${pollId}:`, answer);
      const studentCount = Object.keys(pollStudentSockets[pollId] || {}).length;
      const percentages = {};
      for (const opt of options) {
        percentages[opt] = studentCount > 0 ? ((pollAnswers[pollId][opt] / studentCount) * 100).toFixed(2) : "0.00";
      }
      io.to(pollId).emit("poll-update", {
        studentId,
        answer,
        answerCount: pollAnswerCount[pollId],
        studentCount,
        percentages
      });
      if (pollAnswerCount[pollId] >= studentCount) {
        io.to(pollId).emit("poll-complete", {
          message: "All students answered!",
          percentages,
          totalStudents: studentCount
        });
        delete pollStudentCount[pollId];
        delete pollAnswerCount[pollId];
        delete pollAnswers[pollId];
        delete pollStudentSockets[pollId];
      }

    } catch (err) {
      console.error(err.message);
      socket.emit("error", { message: err.message });
    }
  });

  socket.on("message-receive", ({ message, sender }) => {
    try {
      if (!message) throw new Error("Empty message");
      console.log("Message received from", sender, ":", message);
      socket.broadcast.emit("new-message", { message, sender });
    } catch (err) {
      console.error(err.message);
      socket.emit("error", { message: err.message });
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
    io.emit("student-left", { socketId: socket.id });
  });
});
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
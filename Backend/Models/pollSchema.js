const mongoose = require("mongoose");
const PollSchema = new mongoose.Schema({
  text: { type: String, required: true },
  options: [{ type: String }],
  correctAnswer: { type: String },
  // studentAnswers: [StudentAnswerSchema],
  isActive: { type: Boolean, default: true }, 
  createdAt: { type: Date, default: Date.now },
  timeLimit: { type: Number, default: 60 },

},
  { timestamps: true });


const Poll= mongoose.model("PollSchema", PollSchema);
module.exports = Poll
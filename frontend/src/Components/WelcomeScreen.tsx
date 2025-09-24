import { useState} from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";

const WelcomeScreen = () => {
  const [role, setRole] = useState("");

  const handleRole = (selectedRole: string) => {
    setRole(selectedRole);
  };

    const handleSubmit = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/users/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ role }),
        });

        const data = await res.json();
        console.log("Role saved:", data);
      } catch (error) {
        console.error("Error posting role:", error);
      }
    };


  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-[150px] h-[40px] text-white flex justify-center items-center rounded-[34px] gap-2 intervue-gradient mt-20">
        <div className="w-4 h-4">
          <SparklesIcon className="w-full h-full text-white" />
        </div>
        <div className="font-semibold">Intervue Poll</div>
      </div>
     <div className="max-w-[550px] mt-7 flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-3xl text-black mb-2">
          Welcome to the <span className="font-bold">Live Polling System</span>
        </h1>
        <p className="text-sm text-black/60">
          Please select the role that best describes you to begin using the live polling system
        </p>
      </div>
      <div className="mt-7 flex gap-6">
        <div
          onClick={() => handleRole("student")}
          className={`cursor-pointer w-[260px] border-2 rounded-xl p-4 text-center transition ${
            role === "student" ? "border-purple-600 shadow-lg" : "border-gray-300"
          }`}
        >
          <h2 className="text-lg font-semibold">I am a Student</h2>
          <p className="text-sm text-gray-500 mt-2">
            Join polls, participate in quizzes and interact with your teacher.
          </p>
        </div>
        <div
          onClick={() => handleRole("teacher")}
          className={`cursor-pointer w-[260px] border-2 rounded-xl p-4 text-center transition ${
            role === "teacher" ? "border-purple-600 shadow-lg" : "border-gray-300"
          }`}
        >
          <h2 className="text-lg font-semibold">I am a Teacher</h2>
          <p className="text-sm text-gray-500 mt-2">
            Create live polls, quizzes and engage with your students easily.
          </p>
        </div>
      </div>
      <div className="mt-7">
        <button
          onClick={handleSubmit}
          disabled={!role}
          className="btn-color cursor-pointer w-[150px] h-[40px] flex justify-center items-center rounded-[34px] text-white font-sora font-semibold leading-[23px] transition "
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;

import LogoComponent from "./logoComponent";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const StudentComponent:React.FC= () => {
const navigate = useNavigate(); 
const location = useLocation();
const role = location.state?.role as "student" | undefined;
const handleSubmit=()=>{
  console.log("role",role)
   if (role === "student") {
        navigate("/waiting");
   }
   else {
      navigate("/");
    }
};
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <LogoComponent/>
     <div className="max-w-[550px] mt-7 flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-3xl text-black mb-2">
         Let's <span className="font-bold">Get Started</span>
        </h1>
        <p className="text-sm text-black/60">
          If you’re a student, you’ll be able to <span className="font-extrabold"> submit your answers</span>, participate in live polls, and see how your responses compare with your classmates
        </p>
      </div>
      <div className="relative w-[400px] mt-7">
        <label
          htmlFor="studentName"
          className="block text-[15px] leading-[23px] mb-2">
          Enter your Name
        </label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          placeholder="Type your name"
          className="w-full h-[40px] bg-gray-200 rounded-sm px-4 text-[13px] leading-[23px]  focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div className="mt-7">
        <button onClick={handleSubmit}
          className="btn-color cursor-pointer w-[150px] h-[40px] flex justify-center items-center rounded-[34px] text-white font-sora font-semibold leading-[23px] transition ">
          Continue
        </button>
      </div>
      
    </div>
  );
};


export default StudentComponent;
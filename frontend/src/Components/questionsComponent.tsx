import React from "react";
import ChatComponent from "./chatComponent";
const QuesComponent:React.FC= () => {
  const question = "Which planet is known as the Red Planet?";
  const options = ["Mars", "Venus", "Jupiter", "Saturn"];
   const questionNumber = 1;   
  return (
  <div className="w-screen h-screen flex justify-center items-center bg-gray-50">
    <div className="w-[550px] rounded-lg flex flex-col">
    <h3 className="mb-2">
         Qusertion{questionNumber}
    </h3>
    <div className="border border-[#AF8FF1] rounded-lg">
    <div className="w-full h-[50px] bg-gradient-to-r from-[#343434] to-[#6E6E6E] rounded-t-lg flex items-center px-4">
      <h2 className="text-white text-[17px] leading-[21px] font-sora font-semibold">
      {question}
      </h2>
    </div>
    <div className="flex flex-col gap-4 p-4">
      {options.map((opt, idx) => (
        <div
          key={idx}
          className="flex items-center gap-4 p-4 border rounded-md bg-[#F7F7F7] border-gray-300 cursor-pointer hover:shadow-lg transition"
        >
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-500 text-white font-semibold">
            {idx + 1}
          </div>
          <span className="text-[#2E2E2E] font-sora font-medium text-[16px]">
            {opt}
          </span>
        </div>
      ))}
    </div>
    </div>
    <div className="flex justify-end mt-2">
  <button
    type="button"
    className="w-[120px] h-[42px] btn-color rounded-[34px]  flex justify-center items-center transition hover:brightness-105 cursor-pointer">
    Submit
  </button>
</div>

  </div>
  <ChatComponent/>
   </div>

  );
};

export default QuesComponent;

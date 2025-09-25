import LogoComponent from "./logoComponent";
import React from "react";
const LoadingComponent:React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <LogoComponent />
      <div className="w-8 h-8 border-4  border-[#4D0ACD] border-t-transparent rounded-full animate-spin mt-10">
      </div>
      <div className="max-w-[500px] mt-7 flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-2xl text-black mb-4 font-bold">
          Let's wait for the teacher to ask questions..
        </h1>

      </div>
    </div>
  );
};

export default LoadingComponent;

import type React from "react";
import ChatComponent from "./chatComponent";
import LogoComponent from "./logoComponent";
const PollComponent:React.FC=()=>{
    return(
        <div className="relative  h-screen">
            <div className=" ml-40">
            <LogoComponent/>
            <div className="max-w-[550px] mt-4 flex flex-col justify-left items-left">
                <h1 className="text-3xl text-black mb-2">
                  Let's <span className="font-bold">Get Started</span>
                </h1>
                <p className="text-sm text-black/60">
                   you’ll have the ability to create and manage polls, ask questions, and monitor your students' responses in real-time
                </p>
            </div> 

            <div className="relative mt-4 w-[60%]">
            <div className="flex items-center justify-between mb-1">
                <label
                htmlFor="Question"
                className="block text-[15px] leading-[23px]"
                >
                Enter your Question
                </label>
                <div className="bg-gray-200 w-[120px] h-[36px] rounded-[7px] flex items-center justify-between px-3">
                <span className="text-[12px] text-black">60 seconds</span>
                <svg className="w-5 h-5 text-[#480FB3]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 16l-6-8h12l-6 8z" />
                </svg>
                </div>

            </div>
            <input
                type="text"
                id="Question"
                name="Question"
                className="w-full h-[130px] bg-gray-200 rounded-sm px-4 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#4D0ACD]"
            />
            </div>

                <div className="relative mt-4 w-[60%]">
                <label htmlFor="studentName" className="block text-[15px] leading-[23px] mb-1">
                    Edit Options
                </label>
                <div className="w-[50%] h-[50px] bg-gray-200 rounded-sm px-6 text-[13px] flex items-center focus:outline-none">
                    Rahul
                </div>
                </div>
           
                <div className="mt-4 w-[169px] h-[45px] flex justify-center items-center gap-2 px-[10px] border border-[#7451B6] rounded-[11px] cursor-pointer">
                    <span className="font-sora font-semibold text-[14px] leading-[18px] text-[#7C57C2]">
                        + Add More option
                    </span>
                </div>
                </div>

                <div className=" absolute w-[100%] px-6 py-2 mt-7 border-t border-[#B6B6B6]">
               <div className="flex justify-end mt-2">
                <button
                    type="button"
                    className="btn-color rounded-[34px] px-6 py-3 text-[16px] font-small flex justify-center items-center transition hover:brightness-105 cursor-pointer"
                >
                    Ask Question
                </button>
            </div>

     </div>
    <ChatComponent/>
        </div>
    
    );

}
export default PollComponent;
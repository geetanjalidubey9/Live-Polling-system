import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const ChatComponent: React.FC = () => {
  const [openChat, setOpenChat] = useState(false);
   const location = useLocation();
  const handleOpenChat = () => {
    setOpenChat(!openChat);
  };
   if (location.pathname !== "/student"||"/") return null;
  return (
    <>
      <div
        className="fixed bottom-10 right-10 w-[60px] h-[56px] bg-[#5767D0] rounded-full flex items-center justify-center cursor-pointer z-40"
        onClick={handleOpenChat}>
    {/* <div className="relative w-[37px] h-[37px] flex items-center justify-center"> */}
       <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
   {/* </div> */}

    </div>
    {openChat && (
      <div className="fixed bottom-[100px] right-10 w-[380px] h-[430px] border border-[#DFCCCC] shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[5px] bg-white z-50">
        <div className="absolute top-1 left-0 w-full h-[35px] flex items-center justify-center">
          <div className="absolute left-[28px] font-sora font-semibold text-[14px] text-black">
            Chat
          </div>
          <div className="absolute left-[109px] font-sora font-normal text-[14px] text-center text-[#292929]">
            Participants
          </div>
          <div className="absolute left-[1px] top-[40px] w-[99px] border-t-4 border-[#8F64E1]"></div>
          <div className="absolute left-[100px] top-[40.9px] w-[277px] border-t border-[#C5C5C5] rotate-[-0.2deg]"></div>
        </div>
        <div className="absolute top-[70px] left-[20px] w-[389px] flex flex-col gap-[13px]">
          <div className="flex flex-col w-[228px] max-w-full gap-[2px]">
            <span className="text-[12px] font-semibold font-sora text-[#4F0BD3]">
              User 1
            </span>
            <div className="bg-[#3A3A3B] rounded-[1px_8px_8px_8px] px-[10px] py-[9px]">
              <span className="text-[14px] font-normal font-sora text-white">
                Hey There, how can I help?
              </span>
            </div>
          </div>
          <div className="flex flex-col w-[194px] max-w-full gap-[6px] mr-10 items-end self-end">
            <span className="text-[12px] font-semibold font-sora text-[#4F0BD3]">
              User 2
            </span>
            <div className="bg-[#8F64E1] rounded-[8px_1px_8px_8px] px-[10px] py-[9px]">
              <span className="text-[14px] font-normal font-sora text-white">
                Nothing bro.. just chill!!
              </span>
            </div>
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default ChatComponent;

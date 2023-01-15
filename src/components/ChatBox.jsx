import React from "react";
import ChatBoxHeader from "./ChatBoxHeader";
import MessageInput from "./MessageInput";

const ChatBox = ({ activeChatBox }) => {
  return (
    <div className="w-full h-full bg-gradient-to-bl from-[#8ae4ee] to-[#acf58f] flex flex-col">
      <div>
        <ChatBoxHeader activeChatBox={activeChatBox} />
      </div>
      <div className="flex-1">
        <h1>Hello</h1>
      </div>
      <div className="">
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatBox;

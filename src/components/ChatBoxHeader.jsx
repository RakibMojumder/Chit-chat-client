import React from "react";

const ChatBoxHeader = ({ activeChatBox }) => {
  return (
    <div className="h-18 bg-green-200 p-3 flex items-center cursor-pointer">
      <img
        src={activeChatBox.avatar}
        alt=""
        className="h-12 w-12 rounded-full bg-red-400"
      />
      <h1 className="text-lg ml-3">{activeChatBox.userName}</h1>
    </div>
  );
};

export default ChatBoxHeader;

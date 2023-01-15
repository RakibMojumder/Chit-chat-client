import React, { useEffect, useState } from "react";
import ChatBox from "../components/ChatBox";
import ChatList from "../components/ChatList";

const ChatContainer = () => {
  const [activeChatBox, setActiveChatBox] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("chit-chat-user")));
  }, []);

  const handleShowChatBox = () => {};

  return (
    <div className="min-h-screen flex items-center">
      <div className="h-[90vh] w-full grid grid-cols-12 overflow-hidden rounded-xl">
        <div className="col-span-3">
          <ChatList
            currentUser={currentUser}
            setActiveChatBox={setActiveChatBox}
          />
        </div>
        <div className="col-span-9">
          <ChatBox activeChatBox={activeChatBox} />
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const ChatList = ({ setActiveChatBox, currentUser }) => {
  const { data: friends, isLoading } = useQuery(["users"], async () => {
    const res = await axios.get("http://localhost:5000/auth/register");
    return res.data.users;
  });

  if (isLoading) {
    return;
  }

  return (
    <div className="bg-green-50 relative">
      <div className="h-[600px] flex flex-col border overflow-auto">
        {friends
          .filter((f) => f.email !== currentUser.email)
          .map((friend) => (
            <div
              key={friend._id}
              onClick={() => setActiveChatBox(friend)}
              className="bg-green-300 px-3 py-2 flex items-center cursor-pointer"
            >
              <img
                src={friend.avatar}
                alt=""
                className="h-12 w-12 rounded-full border bg-red-400"
              />
              <h1 className="text-lg ml-3">{friend.userName}</h1>
            </div>
          ))}
      </div>
      <div className="currentUser h-20 absolute bottom-0 left-0 w-full">
        <div className="bg-teal-200 h-full px-4 flex items-center">
          <img
            src={currentUser.avatar}
            alt=""
            className="h-12 w-12 rounded-full border bg-red-400"
          />
          <h1 className="flex-1 text-lg ml-3">{currentUser.userName}</h1>
          <BsThreeDotsVertical className="text-2xl text-slate-800" />
        </div>
      </div>
    </div>
  );
};

export default ChatList;

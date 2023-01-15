import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillFileImage, AiOutlineFileGif } from "react-icons/ai";
import { FaSmileWink } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import EmojiPicker from "emoji-picker-react";

const MessageInput = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmoji = (e) => {
    let msg = message;
    msg += e.emoji;
    setMessage(msg);
  };

  return (
    <div className="relative">
      {showEmojiPicker && (
        <div className="absolute right-5 bottom-16 ">
          <EmojiPicker onEmojiClick={handleEmoji} />
        </div>
      )}
      <div className="h-20 px-6 bg-green-300 flex items-center gap-3 font-konit font-light">
        <BsPlusCircleFill className="text-3xl text-blue-600" />
        <AiFillFileImage className="text-3xl text-blue-600" />
        <AiOutlineFileGif className="text-3xl text-blue-600" />
        <form className="flex-1">
          <input
            className="py-2 pl-6 bg-[#F0F2F5] w-full rounded-full focus:outline-none"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            type="text"
            placeholder="Type your message and press Enter"
            required
          />
        </form>
        <BiSend className="text-4xl text-blue-600" />
        <FaSmileWink
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="text-3xl text-[#FFD633] bg-slate-800 rounded-full"
        />
      </div>
    </div>
  );
};

export default MessageInput;

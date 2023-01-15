import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { getUserFromDB } from "../hooks/getUserFromDB";

const SetAvatar = () => {
  const [selected, setSelected] = useState(false);
  const [profile, setProfile] = useState("");
  const { data: avatars, isLoading } = useQuery(["avatar"], async () => {
    const data = await axios.get("http://localhost:5000/auth/avatar");
    return data.data.avatars;
  });

  if (isLoading) {
    return;
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-bl from-[#8ae4ee] to-[#acf58f]">
      <div className="w-1/2">
        {/* {avatars?.map((avatar) => (
            <div
              key={avatar?._id}
              className={`h-28 w-28 p-2 rounded-full transition-all ${
                avatar._id === selected._id ? "bg-[#26d354]" : ""
              }`}
            >
              <img
                onClick={() => setSelected(avatar)}
                src={avatar?.img}
                alt="avatar"
                className="h-full w-full rounded-full"
              />
            </div>
          ))} */}
        <img
          src={profile ? profile : "https://i.ibb.co/fSfHpjc/img20.png"}
          className="h-28 w-28 rounded-full"
          alt=""
        />
        <button className="px-10 py-1 bg-[#26d354] text-white uppercase font-konit">
          set profile picture
        </button>
      </div>
    </div>
  );
};

export default SetAvatar;

import React from "react";
import { useSelector } from "react-redux";

export default function AllChats() {
  const chats = useSelector((state: any) => state.chats?.conversations);
  return (
    <div className="bg-zinc-400 h-full w-full flex justify-center items-center">
      AllChats
    </div>
  );
}

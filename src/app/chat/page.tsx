"use client";

import AllChats from "./(components)/AllChats";
import Contacts from "./(components)/Contacts";
import SendMessage from "./(components)/SendMessage";
import socket from "../../../socket";

export default function Chat() {
  return (
    <div className="h-screen w-full flex">
      <Contacts />
      <div className="relative flex-1 flex justify-center">
        <AllChats />
        <SendMessage />
      </div>
    </div>
  );
}

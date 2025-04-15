import React from "react";
import FKButton from "../../../../common/form/FKButton";
import { useAuth } from "../../../../contexts/AuthContext";
import ContactList from "./ContactList";

export default function Contacts() {
  const { logout } = useAuth();
  return (
    <div className="w-[260px] h-full flex flex-col justify-between bg-amber-100 px-2 py-3">
      <ContactList />
      <FKButton
        className={"bg-amber-400 shadow-xl place-self-end"}
        onClick={logout}
      >
        Logout
      </FKButton>
    </div>
  );
}

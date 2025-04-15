import React from "react";
import { useSelector } from "react-redux";
import { useGetAllContactsQuery } from "../../../../redux/chat/chatActions";

function ContactList() {
  const { data } = useGetAllContactsQuery({});

  return <div>ContactList</div>;
}

export default ContactList;

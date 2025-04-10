import React from "react";
import AuthWrapper from "../(wrappers)/AuthWrapper";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthWrapper>{children}</AuthWrapper>;
}

"use client";

import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { redirect } from "next/navigation";

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) redirect("/auth/login");
  else return children;
}

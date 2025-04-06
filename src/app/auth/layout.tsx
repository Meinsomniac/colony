import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full bg-radial from-zinc-100 from to-zinc-200 to-90% flex justify-center items-center">
      {children}
    </div>
  );
}

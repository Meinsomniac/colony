"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handlerClick = () => router.push("/auth/login");
  return (
    <div className="h-screen flex justify-center items-center">
      <button
        className="p-4 border-[1px] rounded-md shadow-md bg-indigo-700 text-white hover:bg-indigo-500 cursor-pointer transition-all"
        onClick={handlerClick}
      >
        Login
      </button>
    </div>
  );
}

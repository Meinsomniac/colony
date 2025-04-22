import React from "react";

function GoogleLoginButton() {
  const handleLogin = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };
  return (
    <button
      className="p-2 border-[1px] rounded-md cursor-pointer hover:shadow-md"
      onClick={handleLogin}
    >
      Login with Google
    </button>
  );
}

export default GoogleLoginButton;

import { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="m-4">
      <button
        onClick={handleLogin}
        className="m-4 py-2 px-3 bg-red-600 text-white"
      >
        Login
      </button>
      <button
        onClick={handleLogout}
        className="m-4 py-2 px-3 bg-red-600 text-white"
      >
        Logout
      </button>
      <div className="font-bold">
        User is {isLoggedIn ? "Logged in " : "Logged Out"}{" "}
      </div>
    </div>
  );
};

export default LoggedIn;

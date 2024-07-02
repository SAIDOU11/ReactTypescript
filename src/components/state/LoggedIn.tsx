import { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <div className="m-4">
      <button
        onClick={handleLogin}
        className="py-2 px-3 m-4 bg-blue-800 text-white"
      >
        Login
      </button>
      <button
        onClick={handleLogout}
        className="py-2 px-3 m-4 bg-blue-800 text-white"
      >
        Logout
      </button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"} </div>
    </div>
  );
};

export default LoggedIn;

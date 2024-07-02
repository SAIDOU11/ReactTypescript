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
    <div>
      <button
        onClick={handleLogin}
        className="py-2 px-3 bg-blue-800 text-white m-4"
      >
        Login
      </button>
      <button
        onClick={handleLogout}
        className="py-2 px-3 bg-blue-800 text-white m-4"
      >
        Logout
      </button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};

export default LoggedIn;

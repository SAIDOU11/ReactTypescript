import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Vishwas",
      email: "vishwas@vishwas.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button
        onClick={handleLogin}
        className="bg-red-800 text-white py-2 px-3 m-4"
      >
        Login
      </button>
      <button
        onClick={handleLogout}
        className="bg-red-800 text-white py-2 px-3 m-4"
      >
        Logout
      </button>
      <div>User name is {user?.name} </div>
      <div>User email is {user?.email} </div>
    </div>
  );
};

export default User;

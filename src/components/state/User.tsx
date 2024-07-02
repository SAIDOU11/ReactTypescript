import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Saidou",
      email: "saidou@saidou.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="m-4">
      <button
        onClick={handleLogin}
        className="py-2 px-3 m-4 bg-red-800 text-white"
      >
        Login
      </button>
      <button
        onClick={handleLogout}
        className="py-2 px-3 m-4 bg-red-800 text-white"
      >
        Logout
      </button>
      <div>User name is {user?.name} </div>
      <div>User email is {user?.email} </div>
    </div>
  );
};

export default User;

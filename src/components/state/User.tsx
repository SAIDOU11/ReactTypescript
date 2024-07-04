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
      email: "Saidou@saidou.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <div className="my-4 mx-8">
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
        <div className="font-bold">User name is {user?.name} </div>
        <div className="font-bold">User email is {user?.email} </div>
      </div>
    </div>
  );
};

export default User;

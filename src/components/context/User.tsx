import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: "Saidou",
        email: "saidou@saidou.com",
      });
    }
  };
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <button
        onClick={handleLogin}
        className="bg-red-600 text-white py-2 px-3 m-4"
      >
        Login
      </button>
      <button
        onClick={handleLogout}
        className="bg-blue-800 text-white py-2 px-3 m-4"
      >
        Logout
      </button>
      <div className="m-4">User name is {userContext.user?.name} </div>
      <div className="m-4">User email is {userContext.user?.email} </div>
    </div>
  );
};

export default User;

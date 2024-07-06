import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({
      name: "Salif",
      email: "salif@example.com",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div className="m-4">
      <button
        onClick={handleLogin}
        className="py-2 px-3 bg-blue-800 text-white m-4"
      >
        Login
      </button>
      <button
        onClick={handleLogout}
        className="py-2 px-3 bg-red-800 text-white m-4"
      >
        Logout
      </button>
      <div className="m-4">User name is {userContext.user?.name} </div>
      <div className="m-4">User email is {userContext.user?.email} </div>
    </div>
  );
};

export default User;

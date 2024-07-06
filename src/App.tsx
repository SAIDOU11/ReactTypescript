import "./index.css";

import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";

function App() {
  return (
    <>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </>
  );
}

export default App;

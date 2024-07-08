import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import "./index.css";

function App() {
  return (
    <>
      <Private isLoggedIn={true} component={Profile} />
    </>
  );
}

export default App;

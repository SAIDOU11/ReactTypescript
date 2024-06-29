import "./index.css";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Greet from "./components/Greet";

function App() {
  return (
    <>
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>The Oscar goes to Bob Odenkirk in Better Caul Saul!</Heading>
      </Oscar>
      <Greet name="Bob" isLoggedIn={true} />
    </>
  );
}

export default App;

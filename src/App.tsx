import "./index.css";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Greet from "./components/Greet";

function App() {
  return (
    <>
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>The Oscar goes to Leonardo DiCaprio!</Heading>
      </Oscar>
      <Greet name="Saidou" isLoggedIn={true} />
    </>
  );
}

export default App;

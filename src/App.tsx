import "./index.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Walter",
      last: "White",
    },
    {
      first: "Saul",
      last: "Goodman",
    },
    {
      first: "Gustavo",
      last: "Fring",
    },
  ];

  return (
    <>
      <Greet name="Bob" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </>
  );
}

export default App;

import "./index.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const fullName = {
    firstName: "Marty",
    lastName: "Byrde",
  };

  const nameList = [
    {
      firstName: "Walter",
      lastName: "White",
    },
    {
      firstName: "Saul",
      lastName: "Goodman",
    },
    {
      firstName: "Gustavo",
      lastName: "Fring",
    },
  ];
  return (
    <>
      <Greet name="Bobby" isLoggedIn={true} />
      <Person name={fullName} />
      <PersonList names={nameList} />
    </>
  );
}

export default App;

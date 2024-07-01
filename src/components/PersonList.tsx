import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.first} className="text-xl text-blue-800 m-4">
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;

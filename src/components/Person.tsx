type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

const Person = (props: PersonProps) => {
  return (
    <div>
      <h2 className="text-xl text-gray-800 m-4">
        {props.name.firstName} {props.name.lastName}
      </h2>
    </div>
  );
};

export default Person;

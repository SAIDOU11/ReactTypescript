type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

const Person = (props: PersonProps) => {
  return (
    <div>
      <h1 className="text-xl text-red-500 m-4">
        {" "}
        {props.name.first} {props.name.last}
      </h1>
    </div>
  );
};

export default Person;

type GreetProps = {
  name: string;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2 className="text-xl text-center text-red-600">
        {props.isLoggedIn ? `Welcome back ${props.name}` : `Welcome back`}
      </h2>
    </div>
  );
};

export default Greet;

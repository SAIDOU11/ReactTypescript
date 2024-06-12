type GreetProps = {
  name: string,
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2 className="text-2xl p-4 text-blue-800">
        Welcome back {props.name}, You have 10 unread messages.{" "}
      </h2>
    </div>
  );
};

export default Greet;

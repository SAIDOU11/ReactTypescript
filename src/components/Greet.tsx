type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2 className="text-xl  text-red-600">
        {props.isLoggedIn
          ? `Welcome back ${props.name} you have ${messageCount} unread messages.`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};

export default Greet;

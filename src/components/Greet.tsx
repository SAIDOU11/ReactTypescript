type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2 className="text-2xl text-center text-red-600 m-4">
        {props.isLoggedIn
          ? `Welcome back ${props.name} you have ${messageCount} unread messages.`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};

export default Greet;

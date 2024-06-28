type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2 className="text-2xl p-4 text-red-500">
        {props.isLoggedIn
          ? `Welcome back ${props.name}, You have ${props.messageCount} unread
        messages.`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};

export default Greet;

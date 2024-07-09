import Greet from "../Greet";

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages.`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

export default CustomComponent;

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={(event) => props.handleClick(event, 10)}
      className="m-4 p-4 text-xl bg-blue-200"
    >
      Click
    </button>
  );
};

export default Button;

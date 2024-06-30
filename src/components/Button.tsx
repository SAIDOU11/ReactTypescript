type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button
        className="m-4 py-2 px-4 bg-blue-400 rounded-md text-xl"
        onClick={(event) => props.handleClick(event, 1)}
      >
        Click
      </button>
    </div>
  );
};

export default Button;

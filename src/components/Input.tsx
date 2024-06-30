type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div>
      <input
        className="border-2 border-black m-4 p-2"
        type="text"
        value={props.value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;

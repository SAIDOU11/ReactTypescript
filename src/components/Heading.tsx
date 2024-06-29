type HeadingProps = {
  children: string;
};

const Heading = (props: HeadingProps) => {
  return <h2 className="text-xl text-blue-500 m-4">{props.children}</h2>;
};

export default Heading;

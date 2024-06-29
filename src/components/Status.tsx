type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message;

  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully.";
  } else if (props.status === "error") {
    message = "Error fetching Data ";
  }
  return <h2 className="text-4xl text-center m-4 text-red-600">{message}</h2>;
};

export default Status;

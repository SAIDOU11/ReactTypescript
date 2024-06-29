type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message;

  if (props.status === "loading") {
    message = "Loading";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }

  return (
    <div>
      <h2 className="text-red-600 text-center text-4xl text-bold m-4">
        Status - {message}
      </h2>
    </div>
  );
};

export default Status;

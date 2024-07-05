import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="text-center mt-8">
      <p className="font-bold text-xl ">Count : {state.count} </p>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
              payload: 10,
            })
          }
          className="py-2 px-3 m-4 rounded-md  bg-red-600 text-white"
        >
          Decrement
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              payload: 10,
            })
          }
          className="py-2 px-3 m-4 rounded-md  bg-green-600 text-white"
        >
          Increment
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "reset",
            })
          }
          className="py-2 px-4 m-4 rounded-md   bg-black text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

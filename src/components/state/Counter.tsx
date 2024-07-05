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
    <div className="m-4">
      Count : {state.count}
      <div>
        <button
          onClick={() => dispatch({ type: "increment", payload: 10 })}
          className="py-2 px-3 bg-blue-600 text-white m-4 rounded-md"
        >
          Increment 10
        </button>
        <button
          onClick={() => dispatch({ type: "decrement", payload: 10 })}
          className="py-2 px-3 bg-blue-600 text-white m-4 rounded-md"
        >
          Decrement 10
        </button>
      </div>
      <div>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="rounded-md bg-red-800 text-white py-2 px-3 m-4"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

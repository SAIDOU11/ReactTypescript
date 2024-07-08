import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

// The count value is 5

export class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          className="py-2 px-3 bg-blue-800 text-white"
        >
          Increment
        </button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

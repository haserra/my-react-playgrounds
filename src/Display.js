import React, { Component } from "react";

class Display extends Component {
  // class fields
  state = {
    counter: 1,
  };

  // class methods
  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render = () => {
    return (
      <div>
        <h2 className="bg-primary text-white text-center p-2">
          <div>Props Value: {this.props.value}</div>
          <div>Local state Value: {this.state.counter}</div>
        </h2>
        <div className="text-center">
          <button className="btn btn-primary m-2" onClick={this.props.callback}>
            Parent
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={this.incrementCounter}
          >
            Local
          </button>
        </div>
      </div>
    );
  };
}

export default Display;

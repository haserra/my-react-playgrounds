import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * Class component definition for SimpleButton
 */

export class SimpleButton extends Component {
  // class fields, including state, go here
  state = {
    counter: 0,
    hasButtonClicked: false,
  };

  // class methods go here

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      hasButtonClicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1,
      hasButtonClicked: true,
    });
    this.props.callback();
  }

  // alternatively if using concise arrow syntax don't have this

  /*  
   handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
      hasButtonClicked: true,
    });
    this.props.callback();
  }; 
  */

  render() {
    return (
      <>
        <button
          className={this.props.className}
          //onClick={this.props.callback}
          onClick={this.handleClick}
          disabled={
            this.props.disabled === "true" || this.props.disabled === true
          }
        >
          {this.props.text}
          {this.state.counter}{" "}
          {this.state.hasButtonClicked && <div>Button clicked!</div>}
        </button>
      </>
    );
  }
}

/**
 * Functional component definition for SimpleButton
 */

export function SimpleButton_(props) {
  return (
    <button
      className={props.className}
      onClick={() => {
        props.callback();
      }}
      disabled={props.disabled === "true" || props.disabled === true}
    >
      {props.text}
    </button>
  );
}

SimpleButton_.defaultProps = {
  disabled: false,
};

SimpleButton_.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  callback: PropTypes.func,
  disabled: PropTypes.bool,
};

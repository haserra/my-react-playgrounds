import React from "react";
import { Message } from "../../Message";
import { Summary } from "../../Summary";
import { TableSummary } from "../../TableSummary";
import ReactDOM from "react-dom";

let names = ["Bob", "Alice", "Dora"];

function reverseNames() {
  names.reverse();
  ReactDOM.render(<Chapter10 />, document.getElementById("root"));
}

const promoteName = (name) => {
  names = [name, ...names.filter((val) => val !== name)];
  ReactDOM.render(<Chapter10 />, document.getElementById("root"));
};

function Chapter10() {
  return (
    <>
      <div className="container-fluid">These are Chapter10 contents.</div>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      {/*
        Let's render a table and play with props
      */}
      <table className="table table-sm table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Letters</th>
          </tr>
        </thead>
        <tbody>
          {names
            ? names.map((element, index) => {
                return (
                  <tr key={element}>
                    <TableSummary
                      index={index + 1}
                      name={element}
                      reverseCallback={reverseNames}
                      promoteCallback={promoteName}
                    />
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>

      {/*
        Let's add props to the child components above
      */}
      <Message greeting="Hello" name="Bob" />
      {/**
       * translated into an object :
       * {
       *    greeting: "Hello",
       *    name: "Bob"
       * }
       */}
      <Message greeting="Hola" name={"Alice" + "Smith"} />
      {/**
       * translated into an object :
       * {
       *    greeting: "Hola",
       *    name: "Alice Smith"
       * }
       */}
      <Message greeting="Hi there" name="Dora" />
      {/**
       * translated into an object :
       * {
       *    greeting: "Hi there",
       *    name: "Dora"
       * }
       */}
      <Summary />
      <Summary names={["Bob", "Alice", "Dora"]} />
    </>
  );
}

export default Chapter10;

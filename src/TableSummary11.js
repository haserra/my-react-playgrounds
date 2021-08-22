import React from "react";
// import { CallbackButton } from "./CallbackButton";
import { SimpleButton } from "./SimpleButton";

export function TableSummary11__({
  name,
  index,
  reverseCallback,
  promoteCallback,
}) {
  return (
    <>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{name.length}</td>

      <td>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => reverseCallback()}
        >
          Change the order
        </button>

        <button
          className="btn btn-info btn-sm m-1"
          onClick={() => promoteCallback(name)}
        >
          Promote
        </button>
      </td>
    </>
  );
}

export function TableSummary11_(props) {
  //props.name = `Name: ${props.name}`; // NEVER do this . Props are read-only!

  if (props.name.length >= 4) {
    return (
      <>
        <td>{props.index + 1}</td>
        <td>{props.name}</td>
        <td>{props.name.length}</td>
        <td>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => props.reverseCallback()}
          >
            Change the order
          </button>
        </td>
      </>
    );
  } else {
    return null;
  }
}

export function TableSummary11({
  index,
  name,
  reverseCallback,
  promoteCallback,
}) {
  if (name.length >= 1) {
    return (
      <>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{name.length}</td>
        <td>
          <SimpleButton
            className="btn btn-warning btn-sm m-1"
            callback={() => reverseCallback()}
            text={`Reverse (${name})`}
          />
          <SimpleButton
            className="btn btn-info btn-sm m-1"
            callback={() => promoteCallback(name)}
            text={`Promote (${name})`}
          />
        </td>
      </>
    );
  } else {
    return null;
  }
}

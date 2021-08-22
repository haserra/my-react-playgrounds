import React from "react";

export function Message__({ greeting, name }) {
  return (
    <h4 className="bg-success text-white text-center p-2">
      {greeting}, {name} ! This is just a message.
    </h4>
  );
}

// without object destructuring
export function Message_(props) {
  return (
    <h4 className="bg-success text-white text-center p-2">
      {props.greeting}, {props.name} ! This is just a message.
    </h4>
  );
}

export function Message___({ greeting, name }) {
  if (name === "Bob") {
    return (
      <h4 className="bg-warning p-2">
        {greeting} {name}
      </h4>
    );
  } else {
    return (
      <h4 className="bg-success text-white text-center p-2">
        {greeting} {name}
      </h4>
    );
  }
}

export function Message____({ greeting, name }) {
  const classes = function () {
    return name === "Bob"
      ? "bg-warning p-2"
      : "bg-success text-white text-center p-2";
  };

  const classes_ =
    name === "Bob" ? "bg-warning p-2" : "bg-success text-white text-center p-2";

  return (
    <h4 className={classes()}>
      {greeting} {name}
    </h4>
  );
}

export const Message = ({ greeting, name }) => {
  let classes = "";

  switch (name) {
    case "Bob":
      classes = "bg-warning p-2";
      break;

    case "Dora":
      classes = "bg-secondary text-white text-center p-2";
      break;

    default:
      classes = "bg-success text-white text-center p-2";
      break;
  }

  return (
    <h4 className={classes}>
      {greeting} {name}
    </h4>
  );
};

// export default Message;

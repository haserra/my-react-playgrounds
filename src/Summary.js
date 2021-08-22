import React from "react";

function createInnerElements_(names) {
  let arrayElements = [];
  let i = 0;

  // this isn't the most elegant way to deal with lists or arrays, though. I should use map, instead
  if (names) {
    names.forEach((element) => {
      i++;
      arrayElements.push(
        <div key={i.toString()}>
          {`${element} contains ${element.length} letters`}
        </div>
      );
    });
    return arrayElements;
  } else {
    return <div> No names to show</div>;
  }
}

const createInnerElements = (names) => {
  let i = 0;
  if (names) {
    return names.map((element) => {
      i++;
      return (
        <div
          key={i.toString()}
        >{`${element} contains ${element.length} characters.`}</div>
      );
    });
  } else {
    return <div>No names to show</div>;
  }
};

export const Summary_ = ({ names }) => {
  return (
    <>
      <h4 className="bg-info text-white text-center p-2">
        ...and this is just a summary, with a list of elements{" "}
        {createInnerElements(names)}
      </h4>
    </>
  );
};

// concise way of coding Summary component
export function Summary({ names }) {
  let i = 0;
  return (
    <>
      <h4 className="bg-info text-white text-center p-2">
        {names
          ? names.map((element) => {
              i++;
              return (
                <div
                  key={i.toString()}
                >{`${element} contains ${element.length} characters.`}</div>
              );
            })
          : `Sorry, no names to show`}
      </h4>
    </>
  );
}

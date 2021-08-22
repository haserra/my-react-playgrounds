import React from "react";
import "./Chapter9.css";
// import "../../App.css";
import reactlogo from "../../logo.svg"; // this is the way to import content that will be referred to in an HTML element

const myName = `Horácio`;
const myCity = `Entroncamento`;

// eslint-disable-next-line
//let error = "not a valid statement";

// accessing files in the public folder

function Chapter9() {
  return (
    <>
      <div className="container-fluid">This are Chapter9 contents.</div>
      <img src={reactlogo} alt="reactLogo" />
      <hr />
      <div className="text-center">
        <link rel="stylesheet" href={process.env.PUBLIC_URL + "/static.css"} />
        <h5> {`Hey! This is ${myName}, and I used to live in ${myCity}`} </h5>
        <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="reactLogo" />
      </div>
    </>
  );
}

export default Chapter9;

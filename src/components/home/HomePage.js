import React from "react";
import { Link } from "react-router-dom";

// using JavaScript concise arrow syntax
// learn more here: https://javascript.info/arrow-functions-basics
const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Pro React 16</h1>
      <h2>Part II - Working with React</h2>
      <Link to="about" className="btn btn-primary btn-lg">
        Keep learning
      </Link>
    </div>
  );
};

export default HomePage;

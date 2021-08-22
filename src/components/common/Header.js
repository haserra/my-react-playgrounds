import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = {
    color: "#F15B2A",
  };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/chapter9" activeStyle={activeStyle}>
        Chapter9
      </NavLink>
      {" | "}
      <NavLink to="/chapter10" activeStyle={activeStyle} target="_blank">
        Chapter10
      </NavLink>
      {" | "}
      <NavLink to="/chapter11" activeStyle={activeStyle}>
        Chapter11
      </NavLink>
      {" | "}
      <NavLink to="/chapter12" activeStyle={activeStyle}>
        Chapter12
      </NavLink>
      {" | "}
      <NavLink to="/chapter13" activeStyle={activeStyle}>
        Chapter13
      </NavLink>
      {" | "}
      <NavLink to="/chapter14" activeStyle={activeStyle}>
        Chapter14
      </NavLink>
      {" | "}
      <NavLink to="/chapter15" activeStyle={activeStyle}>
        Chapter15
      </NavLink>
      {" | "}
      <NavLink to="/chapter16" activeStyle={activeStyle}>
        Chapter16
      </NavLink>
      {" | "}
      <NavLink to="/chapter17" activeStyle={activeStyle}>
        Chapter17
      </NavLink>
      {" | "}
      <NavLink to="/chapter99" activeStyle={activeStyle} target="_blank">
        Chapter99
      </NavLink>
    </nav>
  );
}

export default Header;

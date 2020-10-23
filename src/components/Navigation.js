import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <ul className="navigation">
      <li>
        <NavLink exact to="/">
          to do
        </NavLink>
      </li>
      <li>
        <NavLink to="/done">done</NavLink>
      </li>
      <li>
        <NavLink to="/add">Add+</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;

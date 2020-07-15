import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <ul className="navigation">
      <li>
        <NavLink to="/tasks">Do zrobienia</NavLink>
      </li>
      <li>
        <NavLink to="/done">Zrobione</NavLink>
      </li>
      <li>
        <NavLink to="/add">Dodaj zadanie</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;

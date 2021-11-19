import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => (
  <header>
    <h1> Expensify </h1>{" "}
    <NavLink to="/" className="is-active">
      {" "}
      Dashboard{" "}
    </NavLink>{" "}
    <NavLink to="/create" className="is-active">
      {" "}
      Add Expense{" "}
    </NavLink>{" "}
    <NavLink to="/edit" className="is-active">
      {" "}
      Edit Expense{" "}
    </NavLink>{" "}
    <NavLink to="/help" className="is-active">
      {" "}
      Help{" "}
    </NavLink>{" "}
  </header>
);

export default Header;
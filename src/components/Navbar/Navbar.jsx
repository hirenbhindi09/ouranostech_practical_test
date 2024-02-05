import React, { useState } from "react";
import "./Navbar.css";

// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/allusers">
            Users
          </Link>

          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("about");
          }}
        >
          <Link to="/about" style={{ textDecoration: "none" }}>
            About Us
          </Link>

          {menu === "about" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("services");
          }}
        >
          <Link to="/womens" style={{ textDecoration: "none" }}>
            {" "}
            Services
          </Link>
          {menu === "services" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>

        {/* <div className="nav-cart-count">{getTotalCartItemsQuantity()}</div> */}
      </div>
    </div>
  );
};

export default Navbar;

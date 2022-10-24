import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isToggle, setIsToggle] = useState(false);
  const navbarContainer = useRef(null);
  const link = useRef(null);
  let navigate = useNavigate();

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  useEffect(() => {
    // const linkContainerHeight = link.current.clientHeight;
    const linkContainerHeight = "90";
    if (isToggle) {
      navbarContainer.current.style.height = `${linkContainerHeight}vh`;
    } else {
      navbarContainer.current.style.height = "0px";
    }
    // console.log(linkContainerHeight);
  }, [isToggle]);

  return (
    <div className="fixed-navbar">
      <div className="header">
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          trvl
        </h1>
        <button className="toggle-btn" onClick={handleToggle}>
          {isToggle ? (
            <FaTimes className="bars" />
          ) : (
            <FaBars className="bars" />
          )}
        </button>
      </div>
      <div
        className={isToggle ? "navbar-content" : "display"}
        ref={navbarContainer}
      >
        <ul className="navbar">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

{
  /* <div className="navbar-content" ref={navbarContainer}>
        <ul className="navbar" ref={link}>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
        </ul>
      </div> */
}

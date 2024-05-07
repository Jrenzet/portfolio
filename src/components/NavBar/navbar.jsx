import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>
      <div className="desktopMenu">
        <NavLink to="/" className="desktopMenuListItem">
          About
        </NavLink>
        <NavLink to="projects" className="desktopMenuListItem">
          Portfolio
        </NavLink>
        <NavLink to="experience" className="desktopMenuListItem">
          Experience
        </NavLink>
      </div>
      <NavLink to="/contact" className="contactLink">
        <button className="desktopMenuBtn">
          <ContactMailOutlinedIcon className="contactIcon" />
          Contact Me
        </button>
      </NavLink>

      <div className="mobileMenu">
        <MenuIcon
          className="mobileMenuIcon"
          fontSize="large"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <NavLink
            to="/"
            className="mobileMenuListItem"
            onClick={() => setShowMenu(false)}
          >
            About
          </NavLink>
          <NavLink
            to="projects"
            className="mobileMenuListItem"
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="experience"
            className="mobileMenuListItem"
            onClick={() => setShowMenu(false)}
          >
            Experience
          </NavLink>
          <NavLink
            to="contact"
            className="mobileMenuListItem"
            onClick={() => setShowMenu(false)}
          >
            Contact Me
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

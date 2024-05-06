import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="desktopMenu">
        <Link to="/" className="desktopMenuListItem">
          About
        </Link>
        <Link to="projects" className="desktopMenuListItem">
          Portfolio
        </Link>
        <Link to="experience" className="desktopMenuListItem">
          Experience
        </Link>
      </div>
      <Link to="/contact">
        <button className="desktopMenuBtn">
          <ContactMailOutlinedIcon className="contactIcon" />
          Contact Me
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;

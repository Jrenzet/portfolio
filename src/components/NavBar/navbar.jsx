import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/skills", label: "Skills" },
  ];

  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        <img src={logo} alt="Julian logo" className="logo" />
        <span>Julian Renzetti</span>
      </NavLink>
      <div className="desktopMenu">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className="desktopMenuListItem">
            {item.label}
          </NavLink>
        ))}
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
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="mobileMenuListItem"
              onClick={() => setShowMenu(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
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

import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div id="links">
    <Link
      to="https://www.linkedin.com/in/julian-renzetti"
      target="_blank"
    >
      {" "}
      <LinkedInIcon className="link" fontSize="large" />
    </Link>
    <Link to="https://github.com/Jrenzet" target="_blank">
      {" "}
      <GitHubIcon className="link" fontSize="large" />
    </Link>
  </div>
  )
}

export default Footer

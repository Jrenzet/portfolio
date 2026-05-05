import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="links">
      <div className="footerIcons">
        <a
          href="https://www.linkedin.com/in/julian-renzetti"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="link" fontSize="medium" />
        </a>
        <a
          href="https://github.com/Jrenzet"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon className="link" fontSize="medium" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

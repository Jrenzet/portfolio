import React from "react";
import "./intro.css";
import SelfImage from "../../assets/self.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          {" "}
          I'm <span className="introName">Julian</span>
          <br />
          <span className="role">Student & Aspiring Software Developer</span>
          <br />
        </span>
        <p className="description">
          Currently studying computer science at UBC, searching for an
          internship in fall 2024
        </p>
        <img src={SelfImage} alt="me" className="selfImage" />
        {/* <div className="info">
        <div className="bio">
          I'm a former finance professional in the middle of my journey into the
          tech sector. I'm interested in backend development, object oriented
          programming, and trying out new technologies. I have experience with:
          <ul>
            <li>Languages: Java, Python, JavaScript</li>
            <li>Frameworks: React, Express.js, JUnit</li>
            <li>Git, VS Code</li>
          </ul>
        </div>
        <div className="connect">
          Connect with me! Either via LinkedIn or email
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default Intro;

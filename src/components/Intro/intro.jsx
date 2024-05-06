import React from "react";
import "./intro.css";
import SelfImage from "../../assets/self.png";
import { Link } from "react-scroll";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          {" "}
          I'm <span className="introName">Julian</span>
          <br/><span className="role">Student & Aspiring Software Developer</span><br/>
        </span>
        <p className="description">
          Currently studying computer science at UBC, searching for an
          internship in fall 2024
        </p>
        <Link>
          <button className="btn"><InfoOutlinedIcon className="info"/>Learn More</button>
        </Link>
      </div>
      <img src={SelfImage} alt="me" className="selfImage"/>
    </section>
  );
};

export default Intro;

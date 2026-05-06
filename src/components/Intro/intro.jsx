import "./intro.css";
import SelfImage from "../../assets/self.png";
import { NavLink } from "react-router-dom";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <p className="hello">

        </p>
        <h1 className="introText">
          Hi, I&apos;m Julian.
          <span className="wave" aria-hidden="true">
            {" "}
            👋
          </span>        </h1>
        <p className="description">
          I'm a former business student and finance professional who discovered a passion for software. I'm currently in my final semester at the University of British Columbia, in the Bachelor's of Computer Science second degree program. I have a year of technical internships under my belt with experience in Android development, backend systems, query optimization, and Python scripting. I'm currently looking for full time opportunities starting in September 2026.
          <br />
          <br />
          My hobbies include playing basketball, running, snowboarding, and beach volleyball. I love to travel, although being a student has put travel plans on hold for the time being. I've also gotten into gardening and am always looking into ways to optimize my patio farm.
        </p>
        <div className="heroActions">
          <NavLink to="/projects" className="heroBtn primary">
            View Projects
          </NavLink>
          <NavLink to="/contact" className="heroBtn secondary">
            Get in Touch
          </NavLink>
        </div>
      </div>
      <div className="introMedia">
        <img src={SelfImage} alt="Julian portrait" className="selfImage" />
      </div>
    </section>
  );
};

export default Intro;

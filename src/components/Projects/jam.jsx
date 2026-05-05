import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Profile from "../../assets/JAMProfile.png";
import List from "../../assets/JAMList.png";
import Logo from "../../assets/JAM.JPG";
import "./projects.css";

const ConditionalText = () => (
  <div className="conditionalText">
    JAM is a web application to connect musicians who are looking to play
    together. It allows the user to create a profile with their instrument,
    location, and a bio to let the world know what they are looking for in a
    fellow musician. This information is stored on a MongoDB database.
    <br />
    <br />
    <div className="tech">Technologies Used: JavaScript, Express.js, Mongoose, React</div>
  </div>
);

const JamProject = () => {
  return (
    <section className="projectSection">
      <div className="projectHeader">
        <h2>JAM</h2>
        <span>Hackathon</span>
      </div>
      <div className="projectCard">
        <div className="projectCarousel">
          <Carousel interval={null}>
            <Carousel.Item>
              <img src={Logo} alt="JAM logo and landing view" className="slideImage" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Profile} alt="JAM profile builder" className="slideImage" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={List} alt="JAM member list" className="slideImage" />
            </Carousel.Item>
          </Carousel>
        </div>
        <ConditionalText />
      </div>
    </section>
  );
};

export default JamProject;

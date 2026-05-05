import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Interface from "../../assets/PomodoroInterface.png";
import Block from "../../assets/PomBlocker.png";
import "./projects.css";

const ConditionalText = () => (
  <div className="conditionalText">
    This is a chrome extension with a simple timer which, while running, will
    block certain distracting websites. Currently these websites are hardcoded
    and include YouTube, Twitter, Facebook, and Instagram. Timer is set for 25
    minutes in line with the Pomodoro study technique.
    <br />
    <br />
    <div className="tech">Technologies Used: JavaScript, HTML, CSS</div>
  </div>
);

const PomodoroProject = () => {
  return (
    <section className="projectSection">
      <div className="projectHeader">
        <h2>Pomodoro Study Timer</h2>
        <span>Hackathon</span>
      </div>
      <div className="projectCard">
        <div className="projectCarousel">
          <Carousel interval={null}>
            <Carousel.Item>
              <img src={Interface} alt="Pomodoro extension interface" className="slideImage" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Block} alt="Blocked website example" className="slideImage" />
            </Carousel.Item>
          </Carousel>
        </div>
        <ConditionalText />
      </div>
    </section>
  );
};

export default PomodoroProject;

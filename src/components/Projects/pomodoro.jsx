import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Interface from "../../assets/PomodoroInterface.png";
import Block from "../../assets/PomBlocker.png";
import "./projects.css";

// Selects text to render based on active slide
const ConditionalText = ({ slideNum }) => {
  switch (slideNum) {
    case 0:
      return (
        <div className="conditionalText">
          This is a chrome extension with a simple timer which, while running, will block certain distracting websites. Currently these websites are hardcoded and include YouTube, Twitter, Facebook, and Instagram. Timer is set for 25 minutes in line with the Pomodoro study technique.
          <br />
          <br />
          <div className="tech">
            Technologies Used: JavaScript, Chrome APIs, HTML, CSS
          </div>
        </div>
      );
    case 1:
      return <div className="conditionalText">Example of blocked site when timer is running.</div>;
    case 2:
      return <div className="conditionalText">This is for slide 3</div>;
  }
};

const Skills = () => {
  // Update the current slide to conditionally render text
  const [currentIndex, setIndex] = useState(0);

  const stateHandler = (state) => {
    setIndex(state);
  };

  return (
    <section id="projects">
      <h1 className="header">Pomodoro Study Timer (Hackathon)</h1>
      <div className="borderDiv">
        <Carousel
          interval={null}
          activeIndex={currentIndex}
          onSelect={stateHandler}
        >
          <Carousel.Item>
            <img src={Interface} alt="Pomodoro" className="slideImage" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Block} alt="Pomodoro" className="slideImage" />
          </Carousel.Item>
        </Carousel>
        <ConditionalText slideNum={currentIndex}></ConditionalText>
      </div>
    </section>
  );
};

export default Skills;

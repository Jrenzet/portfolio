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
        <div>
          JAM is a simple, intuitive tool for projecting debt and cash flow. The
          home page is simple, with options for the user to input and edit loans
          and financial statements, or generate a report.
        </div>
      );
    case 1:
      return <div>This is for slide 2</div>;
    case 2:
      return <div>This is for slide 3</div>;
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
      <h1 className="header">Pomodoro (Hackathon)</h1>
      <div className="borderDiv">
        <Carousel
          interval={null}
          activeIndex={currentIndex}
          onSelect={stateHandler}
        >
          <Carousel.Item>
            <img src={Interface} alt="JAM" className="slideImage" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Block} alt="JAM" className="slideImage" />
          </Carousel.Item>
        </Carousel>
        <ConditionalText slideNum={currentIndex}></ConditionalText>
      </div>
    </section>
  );
};

export default Skills;

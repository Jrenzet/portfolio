import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Home from "../../assets/JAMHome.png";
import Profile from "../../assets/JAMProfile.png";
import List from "../../assets/JAMList.png";
import Logo from "../../assets/JAM.JPG";
import "./projects.css";

// Selects text to render based on active slide
const ConditionalText = ({ slideNum }) => {
  switch (slideNum) {
    case 0:
      return (
        <div className="conditionalText">
          JAM is a web application to connect musicians who are looking to play
          together. It allows the user to create a profile with their
          instrument, location, and a bio to let the world know what they are
          looking for in a fellow musician. This information is stored on a
          MongoDB database.
          <br />
          <br />
          <div className="tech">
            Technologies Used: JavaScript, Express.js, Mongoose, React
          </div>
        </div>
      );
    case 1:
      return (
        <div className="conditionalText">
          Signup Page: user inputs email and password that will be associated
          with their profile.
        </div>
      );
    case 2:
      return (
        <div className="conditionalText">
          Profile creation page. All information is added to the user data
          associated with the email inputted in the signup page, and saved to
          the database.
        </div>
      );
    case 3:
      return (
        <div className="conditionalText">
          After rpofile creation, the user can now browse a list of all other
          members. If they are interested in connecting, the message button will
          open outlook with a new email draft created, which has the other
          user's email pre-populated in the "To" field.
        </div>
      );
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
      <h1 className="header">JAM (Hackathon)</h1>
      <div className="borderDiv">
        <Carousel
          interval={null}
          activeIndex={currentIndex}
          onSelect={stateHandler}
        >
          <Carousel.Item>
            <img src={Logo} alt="JAM" className="slideImage" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Home} alt="JAM" className="slideImage" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Profile} alt="JAM" className="slideImage" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={List} alt="JAM" className="slideImage" />
          </Carousel.Item>
        </Carousel>
        <ConditionalText slideNum={currentIndex}></ConditionalText>
      </div>
    </section>
  );
};

export default Skills;

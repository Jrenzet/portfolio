import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import BankBuddy from "../../assets/BankBuddy.png";
import BankBuddyHome from "../../assets/BankBuddyHome.JPG";
import BankBuddySave from "../../assets/BankBuddySave.png";
import BankBuddyReport from "../../assets/BankBuddyReport.JPG";
import "./projects.css";

// Selects text to render based on active slide
const BankBuddyText = ({ slideNum }) => {
  switch (slideNum) {
    case 0:
      return (
        <div className="conditionalText">
          BankBuddy is a simple, intuitive tool for projecting debt and cash
          flows. The home page is simple, with options for the user to input and
          edit loans and financial statements, or generate a report.
          <br />
          <br />
          <div className="tech">
            Technologies Used: Java, JUnit testing framework, Java Swing
            libraries for the UI, and JSON files for data persistance.
          </div>
        </div>
      );
    case 1:
      return (
        <div className="conditionalText">
          A data persistance mechanism is also implemented, allowing ther user
          to save/load projections
        </div>
      );
    case 2:
      return (
        <div className="conditionalText">
          The loan page prompts users to add or edit information that they will
          be familiar with, and that is easily accessible in their records. The
          user also has the option to set a loan as "current" or "projected", to
          allow them to test out potential new loans they are thinking of
          applying for.
        </div>
      );
    case 3:
      return (
        <div className="conditionalText">
          A rating of Green, Yellow, or Red is generated based on the porjected
          odds of approval. The user is shown their porjected Debt Service
          Coverage Ratio, and their free cash flow remaining after debt
          payments.
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
      <h1 className="header"> BankBuddy (Academic) </h1>
      <div className="borderDiv">
        <Carousel
          interval={null}
          activeIndex={currentIndex}
          onSelect={stateHandler}
        >
          <Carousel.Item>
            <img src={BankBuddyHome} alt="BankBuddy" className="slideImage" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={BankBuddySave} alt="BankBuddy" className="slideImage" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={BankBuddy} alt="BankBuddy" className="slideImage" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={BankBuddyReport} alt="BankBuddy" className="slideImage" />
          </Carousel.Item>
        </Carousel>
        <BankBuddyText slideNum={currentIndex}></BankBuddyText>
      </div>
    </section>
  );
};

export default Skills;

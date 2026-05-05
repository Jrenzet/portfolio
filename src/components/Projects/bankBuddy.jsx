import React from "react";
import Carousel from "react-bootstrap/Carousel";
import BankBuddy from "../../assets/BankBuddy.png";
import BankBuddyHome from "../../assets/BankBuddyHome.JPG";
import BankBuddyReport from "../../assets/BankBuddyReport.JPG";
import "./projects.css";

const BankBuddyText = () => (
  <div className="conditionalText">
    BankBuddy is a simple, intuitive tool for projecting debt and cash flows for small businesses.
    The user can input and save their financial statements and current debt level, and the system will evaluate their financial health and ability to take on more debt. This was inspired by my previous work in commercial banking.
    <br />
    <br />
    <div className="tech">
      Technologies Used: Java, JUnit, Java Swing
    </div>
  </div>
);

const BankBuddyProject = () => {
  return (
    <section className="projectSection">
      <div className="projectHeader">
        <h2>BankBuddy</h2>
        <span>Academic</span>
      </div>
      <div className="projectCard">
        <div className="projectCarousel">
          <Carousel interval={null}>
            <Carousel.Item>
              <img src={BankBuddyHome} alt="BankBuddy home page" className="slideImage" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={BankBuddy} alt="BankBuddy loan editor" className="slideImage" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={BankBuddyReport} alt="BankBuddy reporting page" className="slideImage" />
            </Carousel.Item>
          </Carousel>
        </div>
        <BankBuddyText />
      </div>
    </section>
  );
};

export default BankBuddyProject;

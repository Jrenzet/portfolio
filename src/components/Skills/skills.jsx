import React from "react";
import Stack from "react-bootstrap/Stack";
import Carousel from "react-bootstrap/Carousel";
import BankBuddy from "../../assets/BankBuddy.png";
import "./skills.css";

const Skills = () => {
  return (
    <section id="projects">
        <Carousel interval={null}>
          <Carousel.Item>
            <img src={BankBuddy} alt="BankBuddy" className="bankBuddyHome" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={BankBuddy} alt="BankBuddy" className="bankBuddyHome" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={BankBuddy} alt="BankBuddy" className="bankBuddyHome" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </section>
  );
};

export default Skills;

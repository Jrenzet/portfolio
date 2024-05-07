import * as React from "react";
import "./experience.css";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import BankBuddyImage from "../../assets/BankBuddy.png";

const Timeline = () => {
  return (
    <section id="experience">
      <h1>Work Experience</h1>
      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            filler
          </Accordion.Body>
        </Accordion.Item>{" "}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Senior Credit Analyst, TD Canada Trust</Accordion.Header>
          <Accordion.Body>
            <div className="jobTitle">
              Senior Credit Analyst, TD Canada Trust <br />
            </div>
            <div className="dates">
              January 2020 – February 2023 <br />
            </div>
            <div className="location">
              Guelph, Ontario
              <br />
            </div>
            <ul>
              <li>
                Analyzed statements and calculated key metrics to understand the
                financial health of mid-market agribusinesses.
              </li>
              <li>
                Summarized this information to underwrite financing requests
                which were presented to middle and upper management for
                approval, resulting in portfolio growth of $50 million across
                various teams.
              </li>
              <li>
                Assigned to a portfolio with total debt exposure of $350
                million, including the largest client in the Ontario region.
              </li>
              <li>
                Worked with a Relationship Manager to underwrite all new
                business requests, resulting in portfolio growth of 70 to 80
                clients in one year.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            <div className="jobTitle">
              Senior Credit Analyst, TD Canada Trust <br />
            </div>
            <div className="dates">
              January 2020 – February 2023 <br />
            </div>
            <div className="location">
              Guelph, Ontario
              <br />
            </div>
            <ul>
              <li>
                Analyzed statements and calculated key metrics to understand the
                financial health of mid-market agribusinesses.
              </li>
              <li>
                Summarized this information to underwrite financing requests
                which were presented to middle and upper management for
                approval, resulting in portfolio growth of $50 million across
                various teams.
              </li>
              <li>
                Assigned to a portfolio with total debt exposure of $350
                million, including the largest client in the Ontario region.
              </li>
              <li>
                Worked with a Relationship Manager to underwrite all new
                business requests, resulting in portfolio growth of 70 to 80
                clients in one year.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Timeline;

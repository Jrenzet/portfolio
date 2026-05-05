import { useState } from "react";
import "./experience.css";
import Accordion from "react-bootstrap/Accordion";
import TDLogo from "../../assets/tdLogo.png";
import UofG from "../../assets/UofG.png";
import UBC from "../../assets/UBC.png";
import RivianLogo from "../../assets/Rivian_Logo_Mark_Gold.png";
import YakoaLogo from "../../assets/yakoa.jpeg";

const Timeline = () => {
  const workKeys = ["0", "1", "2", "3"];
  const extraKeys = ["0", "1"];
  const educationKeys = ["0", "1"];

  const [workActiveKeys, setWorkActiveKeys] = useState([]);
  const [extraActiveKeys, setExtraActiveKeys] = useState([]);
  const [educationActiveKeys, setEducationActiveKeys] = useState([]);

  const expandAll = () => {
    setWorkActiveKeys(workKeys);
    setExtraActiveKeys(extraKeys);
    setEducationActiveKeys(educationKeys);
  };

  const collapseAll = () => {
    setWorkActiveKeys([]);
    setExtraActiveKeys([]);
    setEducationActiveKeys([]);
  };

  const normalizeAccordionKeys = (eventKey) => {
    if (Array.isArray(eventKey)) return eventKey;
    if (eventKey === null) return [];
    return [eventKey];
  };

  return (
    <section id="experience">
      <div className="experienceControls">
        <button
          type="button"
          className="experienceToggleBtn"
          onClick={expandAll}
        >
          Expand all
        </button>
        <button
          type="button"
          className="experienceToggleBtn"
          onClick={collapseAll}
        >
          Collapse all
        </button>
      </div>
      <h2 className="experienceHeader">Work Experience</h2>
      <Accordion
        alwaysOpen
        activeKey={workActiveKeys}
        onSelect={(eventKey) =>
          setWorkActiveKeys(normalizeAccordionKeys(eventKey))
        }
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className="experienceAccordionHeading">
              <span className="experienceAccordionTitle">
                Software Engineer Co-op
              </span>
              <img src={RivianLogo} className="companyLogo" alt="Rivian logo" />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <div className="employer">
              Rivian and Volkswagen Group Technologies <br />
            </div>
            <div className="dates">
              May 2025 - December 2025 <br />
            </div>
            <div className="location">
              Vancouver, BC
              <br />
            </div>
            <ul>
              <li>
                Developed Android applications supporting Rivian&apos;s in-house
                AI voice assistant, deployed to production vehicles
              </li>
              <li>
                Reduced memory footprint by 45% by refactoring UI components
              </li>
              <li>
                Prevented redundant app initialization by implementing a
                system-level package management utility, improving device
                boot-up efficiency
              </li>
              <li>
                Debugged and deployed APKs on proprietary hardware using adb
                tooling
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span className="experienceAccordionHeading">
              <span className="experienceAccordionTitle">
                Software Engineer Co-op
              </span>
              <img src={YakoaLogo} className="companyLogo" alt="Yakoa logo" />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <div className="employer">
              Yakoa <br />
            </div>
            <div className="dates">
              January 2025 - May 2025 <br />
            </div>
            <div className="location">
              Vancouver, BC
              <br />
            </div>
            <ul>
              <li>
                Built backend APIs to manage and query NFT data across multiple
                blockchains and millions of tokens
              </li>
              <li>
                Reduced API processing time by 75% by optimizing SQL queries
                and GraphQL resolvers for Solana data
              </li>
              <li>
                Expanded blockchain coverage by 25% by integrating Solana,
                enabling Yakoa&apos;s first-ever non-Ethereum support
              </li>
              <li>
                Prevented service disruption during provider deprecation by
                migrating backend data pipeline to new external APIs with no
                frontend changes
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <span className="experienceAccordionHeading">
              <span className="experienceAccordionTitle">
                Teaching Assistant - Software Construction
              </span>
              <img src={UBC} className="companyLogo" alt="UBC logo" />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <div className="employer">
              University of British Columbia <br />
            </div>
            <div className="dates">
              September 2024 - December 2024 <br />
            </div>
            <div className="location">
              Vancouver, BC
              <br />
            </div>
            <ul>
              <li>
                Guided students in object-oriented design and testing through
                lectures and labs, providing debugging support and evaluating
                assignments via in-person code reviews
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <span className="experienceAccordionHeading">
              <span className="experienceAccordionTitle">Senior Credit Analyst</span>
              <img src={TDLogo} className="companyLogo" alt="TD logo" />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <div className="employer">
              TD Canada Trust <br />
            </div>
            <div className="dates">
              January 2020 - February 2023 <br />
            </div>
            <div className="location">
              Guelph, Ontario
              <br />
            </div>
            <ul>
              <li>
                Analyzed statements and calculated key metrics to understand the
                financial health of mid-market agribusinesses
              </li>
              <li>
                Summarized this information to underwrite financing requests
                which were presented to middle and upper management for
                approval, resulting in portfolio growth of $50 million across
                various teams
              </li>
              <li>
                Assigned to a portfolio with total debt exposure of $350
                million, including the largest client in the Ontario region
              </li>
              <li>
                Worked with a Relationship Manager to underwrite all new
                business requests, resulting in portfolio growth of 70 to 80
                clients in one year
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h2 className="experienceHeader">Extra Curriculars</h2>
      <Accordion
        alwaysOpen
        activeKey={extraActiveKeys}
        onSelect={(eventKey) =>
          setExtraActiveKeys(normalizeAccordionKeys(eventKey))
        }
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className="experienceAccordionHeading">
              <span className="experienceAccordionTitle">Game Statistician</span>
              <img src={UBC} className="companyLogo" alt="UBC logo" />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <div className="employer">
              University of British Columbia Athletics Department
              <br />
            </div>
            <div className="dates">
              September 2023 - Present <br />
            </div>
            <ul>
              <li>
                Record live in-game statistics for various varsity sports for the UBC
                athletic department.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span className="experienceAccordionHeading">
              <span className="experienceAccordionTitle">
                Supported Learning Groups (SLG) Program
              </span>
              <img
                src={UofG}
                className="companyLogo"
                alt="University of Guelph logo"
              />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <div className="employer">
              University of Guelph <br />
            </div>
            <div className="dates">
              September 2017 - May 2019 <br />
            </div>
            <ul>
              <li>
                Planned and instructed 3-hour weekly sessions to help students
                enhance their understanding of introductory economics.
              </li>
              <li>Created learning material for use in sessions.</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h2 className="experienceHeader">Education</h2>
      <Accordion
        alwaysOpen
        activeKey={educationActiveKeys}
        onSelect={(eventKey) =>
          setEducationActiveKeys(normalizeAccordionKeys(eventKey))
        }
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className="experienceAccordionHeading">
              <span className="experienceAccordionTitle">
                Bachelor of Computer Science (Second Degree Program)
              </span>
              <img src={UBC} className="companyLogo" alt="UBC logo" />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <div className="employer">
              University of British Columbia <br />
            </div>
            <div className="dates">
              September 2023 - Present <br />
            </div>
            <ul>
              <li>88% Cumulative GPA</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span className="experienceAccordionHeading">
              <span className="experienceAccordionTitle">
                Bachelor of Commerce, Food and Agricultural Business
              </span>
              <img
                src={UofG}
                className="companyLogo"
                alt="University of Guelph logo"
              />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <div className="employer">
              University of Guelph <br />
            </div>
            <div className="dates">
              September 2016 - May 2021 <br />
            </div>
            <ul>
              <li>87% Cumulative GPA</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Timeline;

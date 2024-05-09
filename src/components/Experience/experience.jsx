import * as React from "react";
import "./experience.css";
import Accordion from "react-bootstrap/Accordion";
import TDLogo from "../../assets/tdLogo.png";
import KennaLogo from "../../assets/kenna.jpeg";
import KanLogo from "../../assets/kananaskis.png";
import UofG from "../../assets/UofG.png";
import UBC from "../../assets/UBC.png";

const Timeline = () => {
  return (
    <section id="experience">
      <h1 className="header">Work Experience</h1>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Senior Credit Analyst <img src={TDLogo} className="companyLogo" />
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
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Accounts Receivable Coordinator (Co-op)
            <img src={KanLogo} className="companyLogo" />
          </Accordion.Header>
          <Accordion.Body>
            <div className="employer">
              Pomeroy Kananaskis Mountain Lodge <br />
            </div>
            <div className="dates">
              May 2019 - August 2019 <br />
            </div>
            <div className="location">
              Kananaskis, Alberta
              <br />
            </div>
            <ul>
              <li>
                Summarized data from multiple property management systems to
                prepare invoices for clients.
              </li>
              <li>
                Balanced client accounts and managed payment schedules for tour
                groups.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Customer Programs Assistant (Co-op)
            <img src={KennaLogo} className="companyLogo" />
          </Accordion.Header>
          <Accordion.Body>
            <div className="employer">
              Kenna <br />
            </div>
            <div className="dates">
              May 2018 - December 2018 <br />
            </div>
            <div className="location">
              Mississauga, Ontario
              <br />
            </div>
            <ul>
              <li>
                Manually cleaned sales data using pivot tables in Excel to
                ensure it was properly loaded into an IBM Notes database. This
                resulted in end of season rebates being properly calculated and
                rebate payments of up to $50,000 being made to a portfolio of
                100 retailers with no errors.
              </li>
              <li>
                Corresponded with clients by phone and email in French and
                English.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>{" "}
      </Accordion>
      <h1 className="header">Extra Curriculars</h1>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Supported Learning Groups (SLG) Program <img src={UofG} className="companyLogo" />
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
      <h1 className="header">Education</h1>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
          Bachelor of Computer Science (Second Degree Program) <img src={UBC} className="companyLogo" />
          </Accordion.Header>
          <Accordion.Body>
            <div className="employer">
              University of British Columbia <br />
            </div>
            <div className="dates">
              September 2023 - Present <br />
            </div>
            <ul>
              <li>
                89% Cumulative GPA
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Bachelor of Commerce, Food and Agricultural Business <img src={UofG} className="companyLogo" />
          </Accordion.Header>
          <Accordion.Body>
            <div className="employer">
              University of Guelph <br />
            </div>
            <div className="dates">
              September 2016 - May 2021 <br />
            </div>
            <ul>
              <li>
                87% Cumulative GPA
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Timeline;

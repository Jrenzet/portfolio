import React from "react";
import UStats from "../components/Projects/ustats";
import BankBuddy from "../components/Projects/bankBuddy";
import JAM from "../components/Projects/jam";
import Pomodoro from "../components/Projects/pomodoro";

export const Projects = () => {
  return (
    <section>
      <h1 className="section-heading">Projects</h1>
      <p className="section-subheading">
        A mix of personal, coursework, and hackathon projects from my time at UBC
      </p>
      <UStats />
      <BankBuddy />
      <JAM />
      <Pomodoro />
    </section>
  );
};

export default Projects;

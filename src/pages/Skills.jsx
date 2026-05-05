import React from "react";
import "./pages.css";

export const Skills = () => {
  return (
    <section>
      <h1 className="section-heading">Skills</h1>
      <p className="section-subheading">
        Tools and technologies I use to design, build, and ship software.
      </p>
      <div className="skillsGrid">
        <article className="skillsCard">
          <h2>Languages</h2>
          <p>Kotlin/Java, Python, Typescript, SQL</p>
        </article>
        <article className="skillsCard">
          <h2>Technnologies/Frameworks</h2>
          <p>Android SDK, GraphQL, Ariadne, Node.js, Git, JUnit</p>
        </article>
        <article className="skillsCard">
          <h2>AI Tools</h2>
          <p>GitHub Copilot, Cursor, Google Stitch</p>
        </article>
        <article className="skillsCard">
          <h2>Non-Technical</h2>
          <p>Strong Communication Skills, Reading/Interpreting Financial Statements, French Speaker</p>
        </article>
      </div>
    </section>
  );
};

export default Skills;

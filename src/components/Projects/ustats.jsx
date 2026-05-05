import "./projects.css";
import UStatsDashboard from "../../assets/UStatsDashboard.png";

const UStatsProject = () => {
  return (
    <section className="projectSection">
      <div className="projectHeader">
        <h2>UStats</h2>
        <span>Personal</span>
      </div>
      <div className="projectCard">
        <div className="projectCarousel">
          <img
            src={UStatsDashboard}
            alt="UStats live stats dashboard"
            className="slideImage"
          />
        </div>
        <div className="conditionalText">
            Platform for recording and outputting real time player and team statistics for Canadian university football. This allows a user to record game events and generate a standard format XML that is compatible with current Canadian university standards, which is saved to their local machine. Inspired by my work with the UBC athletic department.
            <br />
            <br />
              Live Demo:{" "}
              <a
                className="projectLink"
                href="https://football-stats-tawny.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                football-stats-tawny.vercel.app
              </a>
          <div className="tech">Technologies Used: TypeScript, React</div>
        </div>
      </div>
    </section>
  );
};

export default UStatsProject;

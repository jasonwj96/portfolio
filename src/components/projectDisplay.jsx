import React from "react";
import "./projectDisplay.scss";
import { Link } from "react-router-dom";
import reactLogo from "../img/react-logo.png";

const ProjectDisplay = () => {
  const projects = [
    {
      projectName: "Utp Redes",
      techStack: [<i className="fab fa-react" />, <i className="fab fa-sass" />]
    },
    {
      projectName: "Matshop",
      techStack: [
        <i className="fab fa-react" />,
        <i className="fab fa-sass" />,
        <i class="fab fa-microsoft" />
      ]
    },
    {
      projectName: "ngSight",
      techStack: ["", "", ""]
    }
  ];

  return (
    <div id="projectDisplay-container">
      {projects.map((project, index) => {
        return (
          <div key={index} className="project">
            <div className="tech-stack">
              {project.techStack.map((tech, index) => {
                return <div key={index}>{tech}</div>;
              })}
            </div>
            <div className="project-info">
              <p>{project.projectName}</p>
              <Link to="/" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectDisplay;

import React from "react";
import "./projectDisplay.scss";
import { Link } from "react-router-dom";

const ProjectDisplay = () => {
  const projects = [
    {
      projectName: "Utp Redes",
      techStack: [
        <i className="fab fa-react" />,
        <i className="fab fa-sass" />
      ],
      projectUrl: ""
    },
    {
      projectName: "Matshop",
      techStack: [
        <i className="fab fa-react" />,
        <i className="fab fa-sass" />,
        <i class="fab fa-microsoft" />
      ],
      projectUrl: ""
    },
    {
      projectName: "ngSight",
      techStack: [
        <i class="fab fa-angular" />,
        <i class="fab fa-js" />,
        <i class="fab fa-microsoft" />
      ],
      projectUrl: ""
    }
  ];

  return (
    <div id="projectDisplay-container">
      <p className="title">Projects</p>
      <div className="projects">
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
                <Link to="/" className="arrow link">
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDisplay;

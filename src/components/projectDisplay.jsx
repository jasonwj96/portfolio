import React from "react";
import "./projectDisplay.scss";
import ngSight from "../img/ngsight.png";
import matShop from "../img/matshop.png";
import utpRedes from "../img/utpredes.png";

const ProjectDisplay = () => {
  const projects = [
    {
      projectName: "Utp Redes",
      techStack: [
        <i className="fab fa-react" />,
        <i className="fab fa-js" />,
        <i className="fab fa-sass" />
      ],
      projectUrl: "https://github.com/jasonwj96/UtpRedes",
      imageUrl: utpRedes
    },
    {
      projectName: "Matshop",
      techStack: [
        <i className="fab fa-react" />,
        <i className="fab fa-js" />,
        <i className="fab fa-sass" />,
        <i className="fab fa-microsoft" />
      ],
      projectUrl: "https://github.com/jasonwj96/matshop",
      imageUrl: matShop
    },
    {
      projectName: "ngSight",
      techStack: [
        <i className="fab fa-angular" />,
        <i className="fab fa-microsoft" />,
        <i className="fab fa-js" />,
        <i className="fab fa-sass" />
      ],
      projectUrl: "https://github.com/jasonwj96/ngSight",
      imageUrl: ngSight
    }
  ];

  return (
    <div id="projectDisplay-container">
      <p className="title">Projects</p>
      <div className="projects">
        {projects.map((project, index) => {
          return (
            <div key={index} className="project">
              <div className="img-wrapper">
                <img src={project.imageUrl} alt="tech" />
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => {
                    return <div key={index}>{tech}</div>;
                  })}
                </div>
              </div>

              <div className="project-info">
                <p>{project.projectName}</p>
                <a
                  href={project.projectUrl}
                  className="arrow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDisplay;

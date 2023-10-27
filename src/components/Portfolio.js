import React from "react";
import Project from "./Project";
import portf1 from "../images/portf1.png";
import portf2 from "../images/portf2.gif";
import portf3 from "../images/portf3.jpeg";
import portf4 from "../images/portf4.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

function Portfolio() {
  let portfolios = [
    {
      title: "Movie Finder",
      descriptionText: "",
      portfolioImg: portf1,
      githubUrl:"https://github.com/lucschwalm/moviefinder",
    },
    {
      title: "Mock Restaurant",
      descriptionText: "The purpose of this project was to create a functional and responsive framework for a restaurant website that would help developers get started with client criteria",
      portfolioImg: portf2,
      githubUrl:"https://github.com/rgadewar/mock-restaurant",
    },
    {
      title: "Password Generator Code",
      descriptionText: "The task for module 3 challenge was to to create an application that an employee can use to generate a random password based on criteria they've selected.",
      portfolioImg: portf3,
      githubUrl:"https://github.com/khanadib21/Password-Generator-Code",
    },
    {
      title: "SQL Employee Tracker",
      descriptionText: "This task is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
      portfolioImg: portf4,
      githubUrl:"https://github.com/khanadib21/SQL-Employee-Tracker",
    },
  ]
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        <div className="row">
          {portfolios.map((project, index) => (
            <div className="col-12 col-md-12 col-lg-6 my-2" key={index}>
              <Project
                portfolioImg={project.portfolioImg}
                title={project.title}
                descriptionText={project.descriptionText}
                githubUrl={project.githubUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

import React from "react";

function Project(props) {
  return (
    <div className="card p-3">
      <h2>{props.title}</h2>
      <img src={props.portfolioImg} className="card_img" alt="porft img" />
      <div>
        <p className="">{props.descriptionText}</p>
        <a
          href={props.githubUrl}
          className="btn btn-primary"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Project;

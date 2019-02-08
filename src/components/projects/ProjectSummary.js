import React from 'react';

const ProjectSummary = ({project}) => {
  return(
    <div className="card z-depth-0 project-summary">
      <div className="card-content frey-text text-darken-3">
          <span className="card-title">
            {project.title}
          </span>
        <p>Posted by JG</p>
        <p className="grey-text">08/02/19, 11h</p>
      </div>
    </div>
  )
}

export default ProjectSummary;

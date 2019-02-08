import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sint tempore totam. Ad cupiditate ex hic molestiae mollitia neque, nihil officiis porro similique velit! Accusantium consequuntur harum nesciunt omnis perferendis.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>
            Posted by JG
          </div>
          <div>
            08/02/19 à 11h
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

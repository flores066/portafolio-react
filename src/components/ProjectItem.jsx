import React from 'react';

const ProjectItem = ({ title, description }) => {
  return (
    <div className="mb-4">
      <h5 className="fw-bold text-dark mb-2">{title}</h5>
      <ul className="text-secondary ps-3">
        <li>{description}</li>
      </ul>
      <hr className="my-3 text-muted" />
    </div>
  );
};

export default ProjectItem;
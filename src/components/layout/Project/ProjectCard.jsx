// Project.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.category}</p>
      {/* Add other project details as needed */}
      <Link to={`/projects/${project.id}`}>View Details</Link>
    </div>
  );
};

export default ProjectCard;

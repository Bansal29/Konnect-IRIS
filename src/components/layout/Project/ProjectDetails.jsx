// ProjectDetails.jsx

import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { projectId } = useParams();
  // Fetch project details based on projectId (you can use an API call or mock data)

  const project = {
    id: projectId,
    title: "Project 1",
    authors: ["Author 1", "Author 2"],
    about: "About the project...",
    techStack: "Tech stack...",
    idea: "Project idea...",
    images: ["image1.jpg", "image2.jpg"],
    link: "https://example.com",
  };

  return (
    <div>
      <h2>{project.title}</h2>
      <p>Authors: {project.authors.join(", ")}</p>
      <p>About: {project.about}</p>
      <p>Tech Stack: {project.techStack}</p>
      <p>Idea: {project.idea}</p>
      <p>
        Link:{" "}
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.link}
        </a>
      </p>
      <div>
        {project.images.map((image) => (
          <img
            key={image}
            src={image}
            alt="Project"
            style={{ maxWidth: "100%" }}
          />
        ))}
      </div>
      <button>Request to Colab</button>
      <button>Like</button>
    </div>
  );
};

export default ProjectDetails;

// // ProjectList.jsx

import React from "react";
// import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

// const projects = [
//   // Sample project data
//   {
//     id: 1,
//     title: "Project 1",
//     category: "Web Development",
//     authors: ["Author 1", "Author 2"],
//     // ... other project details
//   },
//   {
//     id: 2,
//     title: "Project 2",
//     category: "Machine Learning",
//     authors: ["Author 3", "Author 4"],
//     // ... other project details
//   },
//   // Add more projects as needed
// ];

// const ProjectList = ({ onSelectDomain }) => {
//   const domains = ["All", "Web Development", "Machine Learning", "Mobile App"];

//   return (
//     <div>
//       <h2>Select Domain:</h2>
//       <select onChange={(e) => onSelectDomain(e.target.value)}>
//         {domains.map((domain) => (
//           <option key={domain} value={domain}>
//             {domain}
//           </option>
//         ))}
//       </select>

//       <h2>Projects:</h2>
//       {projects
//         .filter(
//           (project) =>
//             onSelectDomain === "All" || project.category === onSelectDomain
//         )
//         .map((project) => (
//           <div key={project.id}>
//             <h3>{project.title}</h3>
//             <p>Category: {project.category}</p>
//             <p>Authors: {project.authors.join(", ")}</p>
//             <Link to={`/project/${project.id}`}>View Details</Link>
//             <hr />
//           </div>
//         ))}
//     </div>
//   );
// };

// export default ProjectList;
// ProjectList.jsx
// import React from "react";
// import Project from "./Project"; // Import the Project component
// import "./projectList.css"; // Import your CSS file here

const ProjectList = () => {
  // Assuming projects is an array of project objects
  const projects = [
    // Sample project data
    {
      id: 1,
      title: "Project 1",
      category: "Web Development",
      authors: ["Author 1", "Author 2"],
      // ... other project details
    },
    {
      id: 2,
      title: "Project 2",
      category: "Machine Learning",
      authors: ["Author 3", "Author 4"],
      // ... other project details
    },
    // Add more projects as needed
  ];

  return (
    <div className="project-list-container">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;

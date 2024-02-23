import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import "./Project.css";

const Project = () => {
  const [isDropZoneActive, setIsDropZoneActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    technologyUsed: "",
    ongoing: false,
    folder: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDropZoneActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDropZoneActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    setSelectedFiles(files);
    setIsDropZoneActive(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFiles([file]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedFiles);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectName">Name of Project:</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            placeholder="Project name"
            value={formData.projectName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectDescription">Project Description:</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            placeholder="Project description"
            value={formData.projectDescription}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="technologyUsed">Technology Used:</label>
          <input
            type="text"
            id="technologyUsed"
            name="technologyUsed"
            placeholder="HTML,CSS,JS,REACT"
            value={formData.technologyUsed}
            onChange={handleInputChange}
            required
          />
        </div>
        <label>Upload Folder</label>
        <div
          className={`drop-zone ${isDropZoneActive ? "active" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <label htmlFor="folder" className="upload-label">
            <div className="upload-icon">
              <FontAwesomeIcon icon={faFileUpload} />
            </div>
            <div>Drag & Drop files here or click to browse</div>
          </label>
          <input
            type="file"
            id="folder"
            name="folder"
            accept=".zip,.rar,.7zip"
            onChange={handleFileChange}
          />
        </div>

        <div className="buttons">
          <button className="uploadpr" type="submit">
            Upload Project
          </button>
          <button className="cancel" type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Project;
// <label>
//           <input
//             className="going"
//             type="checkbox"
//             name="ongoing"
//             checked={formData.ongoing}
//             onChange={handleCheckboxChange}
//           />
//           Ongoing
//         </label>

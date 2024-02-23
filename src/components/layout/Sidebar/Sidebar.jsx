import React, { useState } from "react";
import "./Sidebar.css"; // Import your CSS file

const Sidebar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <nav role="navigation">
      <div className="menuToggle">
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span></span>
        <span></span>
        <span></span>
        <ul className={`menu ${isChecked ? "open" : ""}`}>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Info</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
          <a
            href="https://erikterwan.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Show me more</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;

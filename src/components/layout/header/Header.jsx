import React from "react";
import "./headermodule.css";
import Navbar from "./Navbar"; // Import your Navbar component

export default function Header() {
  return (
    <div className="header">
      <Navbar /> {/* Include the Navbar component here */}
    </div>
  );
}

import React, { useState } from "react";
import "./signupmodule.css";
import UniversityEmailForm from "./university";

export default function Signup() {
  const [modal, setModal] = useState(false);
  const [setSelectedUniversity] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleUniversitySelect = (university) => {
    setSelectedUniversity(university);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <div onClick={toggleModal} className="btn-modal">
        Sign-up
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Sign-up</h2>
            <div className="register">
              <UniversityEmailForm onSelect={handleUniversitySelect} />
              <input type="text" name="name" placeholder="Your Name"></input>
              <input type="number" name="prn" placeholder="Your PRN"></input>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
              ></input>
              <input
                type="password"
                name="reEnterPassword"
                placeholder="Re-enter Password"
              ></input>
              <div className="button" onClick={toggleModal}>
                Sign-up
              </div>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

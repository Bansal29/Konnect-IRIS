import React, { useState } from "react";
import "./signinmodule.css";

export default function Signin() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <div onClick={toggleModal} className="btn-modal">
        Sign-in
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Sign-in</h2>
            <div className="login">
              <h1>Login</h1>
              <input
                type="text"
                name="email"
                placeholder="Enter your Email"
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
              ></input>
              <div className="button" onClick={toggleModal}>
                Login
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

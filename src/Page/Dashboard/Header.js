import React from "react";
import "./Header.css";
// import img1 from "./Images/logo.png";

function Header({ setIsAdding }) {
  return (
    <header>
      <div className="navbar">
        {/* <div className="img">
          <img src={img1}></img>
        </div> */}
        <div className="logo">
          <p>Triade.io</p>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Data Solutions</a>
            </li>
            <li>
              <a href="/">Technology</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Resourse</a>
            </li>
          </ul>
        </div>
      </div>
      <h1>Employee Management Software</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add Time Sheet
        </button>
      </div>
    </header>
  );
}

export default Header;

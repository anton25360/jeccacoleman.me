import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="welcome-container">
        <div className="navbar">
          <p className="navbar-link">Short Films</p>
          <p className="navbar-link">Commercial Work</p>
          <p className="navbar-link">Contact</p>
        </div>
        <div className="intro-container">
          <h1 className="intro-title">Hi, I'm Jecca.</h1>
          <p className="intro-desc">
            I'm a second-year filmmaking student at the University of the West
            of England (UWE) currently specialising in editing and colour
            grading.
            <br />
            <br />
            I have experience using Adobe Premiere Pro, AVID Media Composer,
            Adobe After Effects, and Adobe Audition.
            <br />
            <br /> Fancy working together?
            <br />
            <br />
            <button className="intro-contact-button">Get in touch</button>
          </p>
        </div>
        <div className='scroll-indicator'>SCROLL FOR MORE</div>
      </div>
    </div>
  );
}

export default App;

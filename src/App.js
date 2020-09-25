import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 id="title">You Smell</h1>

      <iframe
        id="video"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/PPzl7fnN15E"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <p id="subtitle">jk you're amazing & I love you ❤️</p>
    </div>
  );
}

export default App;

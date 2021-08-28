import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";


function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        <Timer />
        {/* <Optin /> */}
        <Preloader />
      </div>
    </div>
  );
}

export default App;

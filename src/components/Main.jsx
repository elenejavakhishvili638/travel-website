import React from "react";
import homeImage from "../images/img-home.jpg";
import "./Main.css";

function Main() {
  return (
    <div>
      <div className="main-part-one">
        <h1>What are you waiting for?</h1>
        <button className="start-btn btn">get started</button>
        <button className="watch-btn btn">watch tariler</button>
      </div>
      {/* <img className="home-image" alt="pic" src={homeImage} /> */}
    </div>
  );
}

export default Main;

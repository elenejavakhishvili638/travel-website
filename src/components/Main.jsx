import React from "react";
import Card from "./Card";
import "./Main.css";
import homeImage from "../images/img-home.jpg";

function Main() {
  return (
    <div>
      <div className="main-part-one">
        <div className="margin">
          <h1>What are you waiting for?</h1>
          <div>
            <button className="start-btn btn">get started</button>
            <button className="watch-btn btn">watch trailer</button>
          </div>
        </div>
      </div>
      {/* <img className="home-image" alt="pic" src={homeImage} /> */}
      <Card />
    </div>
  );
}

export default Main;

import React from "react";
import CardItem from "./CardItem";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      {/* <div className="card-item"></div> */}
      {/* <CardItem
        src="../images/img-1.jpg"
        text="Explore the hidden waterfall deep inside the Amazon Jungle"
        label="Adventure"
      /> */}
      <div className="item-container-first">
        <CardItem
          src="../images/img-9.jpg"
          text="Explore the hidden waterfall deep inside the Amazon Jungle"
          label="Adventure"
        />
        <CardItem
          src="../images/img-2.jpg"
          text="Explore the hidden waterfall deep inside the Amazon Jungle"
          label="Adventure"
        />
      </div>
      <div className="item-container-second">
        <CardItem
          src="../images/img-3.jpg"
          text="Explore the hidden waterfall deep inside the Amazon Jungle"
          label="Adventure"
        />
        <CardItem
          src="../images/img-4.jpg"
          text="Explore the hidden waterfall deep inside the Amazon Jungle"
          label="Adventure"
        />
        <CardItem
          src="../images/img-8.jpg"
          text="Explore the hidden waterfall deep inside the Amazon Jungle"
          label="Adventure"
        />
      </div>
      {/* <CardItem
        src="../images/img-5.jpg"
        text="Explore the hidden waterfall deep inside the Amazon Jungle"
        label="Adventure"
      />
      <CardItem
        src="../images/img-6.jpg"
        text="Explore the hidden waterfall deep inside the Amazon Jungle"
        label="Adventure"
      />
      <CardItem
        src="../images/img-7.jpg"
        text="Explore the hidden waterfall deep inside the Amazon Jungle"
        label="Adventure"
      /> */}
    </div>
  );
}

export default Card;

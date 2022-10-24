import React from "react";
import "./CardItem.css";

function CardItem({ src, label, text }) {
  return (
    <div className="card-item">
      <img className="img" src={src} alt={src} />
      <p className="label">{label}</p>
      <p className="text">{text}</p>
    </div>
  );
}

export default CardItem;

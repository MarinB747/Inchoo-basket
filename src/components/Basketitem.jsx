import React from "react";
import img from "../assets/first-image.png";
import "./components.css";
function BasketItem(props) {
  return (
    <div className="item__divider">
      <div className="item__container">
        <img src={props.img} alt="/" />
        <div className="item__text--wrapper">
          <text>{props.name}</text>
          <text className="text__color">{props.brand}</text>
          <text className="text__color">{props.property}</text>
          <text className="item__price">{props.price}</text>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;

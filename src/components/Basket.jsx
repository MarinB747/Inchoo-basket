import React, { useState } from "react";
import "./components.css";
import BasketImg from "../assets/basket.png";
import { Items } from "../items/Items.js";
import BasketItem from "./Basketitem";
function Basket() {
  const [basketItem, setBasketItem] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const handleNext = () => {
    setStartIndex(startIndex + 1);
    setEndIndex(endIndex + 1);
  };
  const handlePrev = () => {
    setStartIndex(startIndex - 1);
    setEndIndex(endIndex - 1);
  };
  const handleShowBasket = () => {
    setBasketItem(!basketItem);
  };
  return (
    <div className="basket__wrapper">
      <button className="basket__btn" onClick={handleShowBasket}>
        <img src={BasketImg} alt="/" />
      </button>
      {basketItem ? (
        <div className="basket__container">
          <span className="basket__triangle"></span>
          <text className="basket__mycart"> My Cart (5 items) </text>
          <div className="item__divider"></div>
          {startIndex === 0 ? null : (
            <button className="basket__nav--btn" onClick={handlePrev}>
              ▲
            </button>
          )}

          {Items.slice(startIndex, endIndex).map(item => (
            <BasketItem
              name={item.name}
              img={item.img}
              brand={item.brand}
              property={item.property}
              price={item.price}
            />
          ))}

          {endIndex === Items.length ? null : (
            <button className="basket__nav--btn" onClick={handleNext}>
              ▼
            </button>
          )}
          <div className="btn__wrapper">
            <button className="basket__edit--btn">Edit Cart</button>
            <button className="basket__checkout--btn">CHECKOUT</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Basket;

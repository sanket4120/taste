import React, { useState } from "react";
import "./styles.css";
import { shows } from "./data";

export default function App() {
  const [category, setCategory] = useState("drama");

  const handleClick = (show) => {
    setCategory(show);
  };

  return (
    <div className="App">
      <h2>Checkout my favourite tv shows 📺</h2>
      <p>select category to get started</p>

      <div className="btn__container">
        {Object.keys(shows).map((show) => {
          return (
            <button
              className="btn"
              onClick={() => handleClick(show)}
              style={{
                backgroundColor: category === show && "#03506f",
                color: category === show && "#fff"
              }}
            >
              {show}
            </button>
          );
        })}
      </div>

      <div className="card__container">
        {shows[category].map((show, index) => (
          <div className="card" key={index}>
            <div className="image">
              <img src={show.img} alt="" />
            </div>
            <h3>{show.name}</h3>
            <span>My Rating: {show.rating} / 10</span>
          </div>
        ))}
      </div>
    </div>
  );
}

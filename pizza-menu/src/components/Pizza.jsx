import React from "react";

const Pizza = ({ pizza }) => {
  // if (pizza.soldOut) return null;
  return (
    <div className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <div className="pizza-header">
          <h3>{pizza.name}</h3>
          {pizza.soldOut ? (
            <p>
              <b>SOLD OUT</b>
            </p>
          ) : (
            <p> {pizza.price}$</p>
          )}
        </div>

        <span>{pizza.ingredients}</span>
      </div>
    </div>
  );
};

export default Pizza;

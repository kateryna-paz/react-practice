import React from "react";

const Pizza = ({ pizza }) => {
  return (
    <div className="pizza">
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <div className="pizza-header">
          <h3>{pizza.name}</h3>
          <p>{pizza.price}$</p>
        </div>

        <span>{pizza.ingredients}</span>
      </div>
    </div>
  );
};

export default Pizza;

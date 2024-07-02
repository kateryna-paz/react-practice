import React from "react";
import Pizza from "./Pizza";

const Menu = ({ pizzaData }) => {
  return (
    <div className="menu">
      <h2>Our menu</h2>
      <div className="pizzas">
        {pizzaData.map((p) => (
          <Pizza key={p.name} pizza={p} />
        ))}
      </div>
    </div>
  );
};

export default Menu;

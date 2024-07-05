import React from "react";
import Pizza from "./Pizza";

const Menu = ({ pizzaData }) => {
  return (
    <div>
      <div className="menu">
        <h2>Our menu</h2>

        {pizzaData.length > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delecious.
            </p>

            <div className="pizzas">
              {pizzaData.map((p) => (
                <Pizza key={p.name} pizza={p} />
              ))}
            </div>
          </>
        ) : (
          <p>Sorry, we don't have any pizzas now.</p>
        )}
      </div>
      <div className="order">
        <button className="btn">Order</button>
      </div>
    </div>
  );
};

export default Menu;

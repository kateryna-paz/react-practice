import React from "react";

const TravelItem = ({ item, deleteItem, packItem }) => {
  return (
    <li>
      <div>
        <input
          onChange={() => packItem(item.id)}
          type="checkbox"
          checked={item.packed}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
      </div>
      <button onClick={() => deleteItem(item.id)}>✖️</button>
    </li>
  );
};

export default TravelItem;

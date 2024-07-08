import React from "react";
import TravelItem from "./TravelItem";

const PackingList = ({ items, deleteItem, packItem }) => {
  return (
    <div className="list">
      <ul>
        {items.length > 0 &&
          items.map((i) => {
            return (
              <TravelItem
                key={i.id}
                item={i}
                packItem={packItem}
                deleteItem={deleteItem}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default PackingList;

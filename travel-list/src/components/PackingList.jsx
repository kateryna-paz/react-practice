import React from "react";
import TravelItem from "./TravelItem";
import Sort from "./Sort";
import { useState } from "react";

const PackingList = ({ items, deleteItem, packItem, clearList }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.length > 0 &&
          sortedItems.map((i) => {
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
      <Sort sortBy={sortBy} setSortBy={setSortBy} clearList={clearList} />
    </div>
  );
};

export default PackingList;

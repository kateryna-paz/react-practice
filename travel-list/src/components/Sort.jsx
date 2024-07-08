import React from "react";

const Sort = ({ sortBy, setSortBy, clearList }) => {
  return (
    <div className="actions">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="packed">Sort by packed status</option>
        <option value="description">Sort by description</option>
      </select>
      <button onClick={clearList}>Clear List</button>
    </div>
  );
};

export default Sort;

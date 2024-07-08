import React from "react";

const Stats = ({ items }) => {
  if (items.length === 0) {
    return (
      <p className="stats">Let's start adding some items to your list 😎!</p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((i) => i.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "🎉🎉🎉 You have everything! Ready to go 🛫"
          : ` You have ${numItems} items on your list 📃, and you already packed 
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;

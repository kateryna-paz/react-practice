import React from "react";

const AccordianItem = ({ num, item, curOpen, onOpen }) => {
  const isOpen = num === curOpen;

  const handleOpen = () => {
    onOpen(isOpen ? null : num);
  };
  return (
    <li className={`item ${isOpen ? "open" : ""}`} onClick={handleOpen}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{item.title}</p>

      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{item.text} </div>}
    </li>
  );
};

export default AccordianItem;

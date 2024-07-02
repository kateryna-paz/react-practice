import React, { useState } from "react";

const currentTime = () => {
  const currentDate = new Date();
  const minnets =
    (currentDate.getMinutes() > 9 ? "" : "0") + currentDate.getMinutes();
  const secconds =
    (currentDate.getSeconds() > 9 ? "" : "0") + currentDate.getSeconds();
  return `${currentDate.getHours()}:${minnets}:${secconds}`;
};

const Header = (props) => {
  const [time, setTime] = useState(currentTime());

  setTimeout(() => {
    setTime(currentTime());
  }, 1000);

  const openHour = 10;
  const closeHour = 22;

  const isOpen = `${
    time.split(":")[0] >= openHour && time.split(":")[0] < closeHour
      ? "We're open and ready to take your orders! 🍕"
      : "Sorry, we're closed now. See you tomorrow for more delicious pizzas! 🍕"
  }`;

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
      <h3>
        <i>
          It is {time}. {isOpen}
        </i>
      </h3>
    </header>
  );
};

export default Header;

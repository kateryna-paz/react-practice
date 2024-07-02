import React, { useState } from "react";

const Footer = (props) => {
  const [hour] = useState(new Date().getHours());
  const openHour = 10;
  const closeHour = 22;

  const isOpen = `Now we are ${
    hour >= openHour && hour <= closeHour ? "open" : "closed"
  }.`;

  return (
    <div>
      <footer className="footer">
        <h3>
          <i>{hour} hours.</i> {isOpen}
        </h3>
      </footer>
    </div>
  );
};

export default Footer;

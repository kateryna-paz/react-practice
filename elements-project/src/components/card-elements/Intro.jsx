import React from "react";

const Intro = ({ intro, name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{intro}</p>
    </div>
  );
};

export default Intro;

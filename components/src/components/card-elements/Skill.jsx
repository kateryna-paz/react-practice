import React from "react";

const Skill = ({ skill }) => {
  return (
    <p style={{ backgroundColor: skill.color }} className="skill">
      {skill.name}
    </p>
  );
};

export default Skill;

import React from "react";
import Skill from "./Skill";

const SkillList = ({ skills }) => {
  return (
    <div className="skills">
      {skills.map((s) => {
        return <Skill key={s.name} />;
      })}
    </div>
  );
};

export default SkillList;

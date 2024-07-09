import React from "react";
import Avatar from "./card-elements/Avatar";
import Intro from "./card-elements/Intro";
import SkillList from "./card-elements/SkillList";

const Card = ({ profile }) => {
  if (!profile) return null;
  return (
    <div className="card">
      <Avatar image={profile.image} />
      <div className="data">
        <Intro intro={profile.intro} name={profile.name} />
        <SkillList skills={profile.skills} />
      </div>
    </div>
  );
};

export default Card;

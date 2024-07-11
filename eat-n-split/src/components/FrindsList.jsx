import React from "react";
import FriendItem from "./FrindItem";

const FriendsList = ({ friends, handleSelect, selectedFriend }) => {
  return (
    <ul>
      {friends.map((f) => {
        return (
          <FriendItem
            key={f.id}
            friend={f}
            handleSelect={handleSelect}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
};

export default FriendsList;

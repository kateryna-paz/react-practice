import React from "react";
import Button from "./Button";

const FriendItem = ({ friend, selectedFriend, handleSelect }) => {
  const isOwing = friend.balance < 0;
  const isEven = friend.balance === 0;
  const friendOwes = friend.balance > 0;

  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {isOwing && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friendOwes && (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      )}
      {isEven && <p className="">You and {friend.name} are even</p>}
      <Button
        onClick={() => {
          handleSelect(friend.id);
        }}
      >
        {selectedFriend === friend.id ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default FriendItem;

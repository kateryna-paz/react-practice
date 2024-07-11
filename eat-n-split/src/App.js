import { useState } from "react";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import FriendsList from "./components/FrindsList";
import SplitBillForm from "./components/SplitBillForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = (props) => {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSelectFriend] = useState(null);

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((f) =>
        f.id === selectedFriend ? { ...f, balance: f.balance + value } : f
      )
    );
    setSelectFriend(null);
  };

  const handleSelect = (id) => {
    setShowAddForm(false);
    if (selectedFriend === id) {
      setSelectFriend(null);
    } else {
      setSelectFriend(id);
    }
  };
  const handleOpenAddForm = () => {
    setSelectFriend(null);
    setShowAddForm(!showAddForm);
  };

  const addFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
    handleOpenAddForm();
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          handleSelect={handleSelect}
        />

        {showAddForm && <AddFriendForm addFriend={addFriend} />}
        <Button onClick={handleOpenAddForm}>
          {showAddForm ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend ? (
        <SplitBillForm
          onSplitBill={handleSplitBill}
          friend={friends.find((friend) => friend.id === selectedFriend)}
        />
      ) : null}
    </div>
  );
};

export default App;

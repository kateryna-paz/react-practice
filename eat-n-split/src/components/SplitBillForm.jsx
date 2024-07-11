import { useState } from "react";
import Button from "./Button";

function SplitBillForm({ friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const friendExpense = bill ? bill - yourExpense : "";
  const [whoIsPaing, setWhoIsPaing] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !yourExpense) return;

    onSplitBill(whoIsPaing === "user" ? friendExpense : -yourExpense);
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split the bill with {friend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🪙 Your expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) =>
          setYourExpense(
            Number(e.target.value) > bill ? yourExpense : Number(e.target.value)
          )
        }
      />

      <label>💵 {friend.name}`s expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIsPaing}
        onChange={(e) => setWhoIsPaing(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default SplitBillForm;

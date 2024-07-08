import Header from "./components/Header";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 4, description: "Toothbrush", quantity: 1, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };
  const deleteItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  const packItem = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId && item.packed === false) {
          return { ...item, packed: true };
        } else if (item.id === itemId && item.packed === true) {
          return { ...item, packed: false };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <Form addItem={addItem} />
      <PackingList items={items} deleteItem={deleteItem} packItem={packItem} />
      <Stats />
    </div>
  );
}

export default App;

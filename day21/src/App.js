import { useState } from "react";
import AddItemForm from "./components/AddItemForm";
import RenderItem from "./components/RenderItem";

const App = () => {
  const [items, setItems] = useState([]);

  const updateItem = (index, newItem) => {
    setItems(
      items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
    );
  };

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <AddItemForm addItem={addItem} />
      {items.length === 0 ? (
        <p className="text-center mt-4">
           add as per need
        </p>
      ) : (
        items.map((item, index) => (
          <RenderItem
            item={item}
            key={index}
            index={index}
            updateItem={updateItem}
            removeItem={removeItem}
          />
        ))
      )}
    </div>
  );
};

export default App;
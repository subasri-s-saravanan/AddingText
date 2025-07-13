import React, { useState } from "react";

function App() {
  const [inputtext, setinputtext] = useState("");
  const [items, setitems] = useState([]);
  function handle(event) {
    const newvalue = event.target.value;
    setinputtext(newvalue);
  }
  function addItem() {
    setitems((prevValue) => {
      return [...prevValue, inputtext];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handle} type="text" value={inputtext} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => {
            return <li key={index}>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

//** RENDER LIST OF ITEMS
import React from "react";

const List = () => {
  const items = ["Item1", "Item2", "Item3", "Item4", "Item5"];
  return (
    <div>
      <h1>List</h1>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;

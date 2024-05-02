//** TODO LIST
import React from "react";

const ToDoList = () => {
  const [input, setInput] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput(""); 
    }
  };

  const removeTodo = (indexToRemove) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToRemove);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

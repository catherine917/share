import React from "react";

const AddTodo = ({ onAddClick }) => {
  const handleKeyUp = function(e) {
    if (e.keyCode === 13) {
      const node = e.target;
      const text = node.value && node.value.trim();
      text && onAddClick({ label: text, completed: false });
      node.value = "";
    }
    e.preventDefault();
  };
  return (
    <div className="todo-new">
      <h1>todos</h1>
      <input
        type="text"
        className="todo-input"
        placeholder="input todo item"
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default AddTodo;

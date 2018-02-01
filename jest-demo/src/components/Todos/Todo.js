import React from "react";

const Todo = ({ completed, text, changeTodoState, index }) => {
  const onCheck = function(e) {
    changeTodoState(index, !completed);
    e.preventDefault();
  };
  return (
    <li className={completed ? "completed" : ""}>
      <div className="todo-item">
        <input type="checkbox" onClick={onCheck} />
        <label>{text}</label>
      </div>
    </li>
  );
};
export default Todo;

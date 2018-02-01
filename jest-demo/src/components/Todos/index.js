import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "./Todos.css";

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      showTodos: true,
      todoList: [
        { label: "test1", completed: false },
        { label: "test2", completed: false },
        { label: "test3", completed: false }
      ]
    };
    this.onAddClick = this.onAddClick.bind(this);
    this.changeTodoState = this.changeTodoState.bind(this);
  }
  onAddClick(item) {
    let todoList = this.state.todoList;
    todoList.push(item);
    this.setState({
      todoList: todoList
    });
  }
  changeTodoState(index, completed) {
    let todoList = this.state.todoList;
    todoList[index].completed = completed;
    this.setState({
      todoList: todoList
    });
  }
  render() {
    return (
      <div className="todo-container">
        <AddTodo onAddClick={this.onAddClick} />
        <TodoList
          todoList={this.state.todoList}
          changeTodoState={this.changeTodoState}
        />
      </div>
    );
  }
}

export default Todos;

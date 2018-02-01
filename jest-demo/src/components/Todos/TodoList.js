import React from 'react';
import Todo from './Todo';

const TodoList = ({todoList,changeTodoState}) => {
    return (
        <ul className="todo-list">
            {
                todoList.map((todo,index) => 
                <Todo key={index} text={todo.label} completed={todo.completed} changeTodoState={changeTodoState}  index={index}/>)
            }
        </ul>
    )
}
export default TodoList;
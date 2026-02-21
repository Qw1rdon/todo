import React from "react";
import TodoListItem from "./TodoListItem.jsx";


const TodoList = ({todos}) => {
    const elements = todos.map((item) => {
    return (
        <ul>
        <li><TodoListItem {...item}/></li>
        </ul>
        );
    });

    return(
        <ul>
            {elements}
        </ul>
    )
}

export default TodoList;
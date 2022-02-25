import React from 'react'

export default function Todo({todo, toggleTodo, id, removeTodo}) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <li>
            <label style={{ textDecoration: todo.complete ? "line-through" : "" }} >
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                {todo.name}
            </label>
            <button onClick={() => removeTodo(id)}>X</button>
        </li>
    )
}

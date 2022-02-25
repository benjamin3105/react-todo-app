import React from 'react'

export default function Todo({todo, toggleTodo, id, removeTodo}) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <li className="br-3 todo">
            <label style={{ textDecoration: todo.complete ? "line-through" : "" }} >
                <input className="checkbox-todo" type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                {todo.name}
            </label>
            <button className="br-3 remove-todo" onClick={() => removeTodo(id)}>X</button>
        </li>
    )
}

import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, toggleTodo, id, removeTodo}) {
    return (
        <ul>
            {todos.map((todo, id) =>
                <Todo key={id} todo={todo} toggleTodo={toggleTodo} id={id} removeTodo={removeTodo} />
            )}
            
        </ul>
    )
}

import React from 'react'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'

export default function TodoList({todos, toggleTodo, id, removeTodo}) {
    return (
        <ul>
            {todos.map((todo) =>
                <Todo key={uuidv4()} todo={todo} toggleTodo={toggleTodo} id={id} removeTodo={removeTodo} />
            )}
            
        </ul>
    )
}

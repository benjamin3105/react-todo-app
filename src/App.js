import './App.css';
import React, {useState, useRef, useEffect} from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.toods'

function App() {

  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storeTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storeTodos) setTodos(storeTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current?.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...todos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleDeleteTodo() {
    setTodos([])
  }

  function handleClearComplete(complete) {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  const removeTodo = id => {
    const newTodos = [...todos]
    newTodos.splice(id, 1)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <Header />
      <div className="br-3 left-todo"><strong>{todos.filter(todo => !todo.complete).length}</strong> left to do</div>
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <input className="br-3 input-todo" type="text" ref={todoNameRef} placeholder="My todo..." />
      <button className="br-3 button add-todo" onClick={handleAddTodo}>Add todo</button>
      <button className="br-3 button complete-todo" onClick={handleClearComplete}>Clear Complete</button>
      <button className="br-3 button delete-todo" onClick={handleDeleteTodo}>Delete all todos</button>
      
    </div>
  )
}

export default App;

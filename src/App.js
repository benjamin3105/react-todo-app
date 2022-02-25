import './App.css';
import React, {useState, useRefs, useRef, useEffect} from 'react';
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

  function removeTodo() {

  }

  return (
    <div className="App">
      <Header />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />

      <input 
      type="text"
      ref={todoNameRef} />
      <button onClick={handleAddTodo}>Add todo</button>
      <button onClick={handleClearComplete}>Clear Complete</button>
      <button onClick={handleDeleteTodo}>Delete all todos</button>
      {todos.filter(todo => !todo.complete).length} left to do
    </div>
  )
}

export default App;

// src/App.js
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.status === 'completed';
    if (filter === 'not_completed') return todo.status === 'not_completed';
    return true;
  });

  return (
    <div className="App">
      <h1 className="title">My todo</h1>
      <TodoForm addTodo={addTodo} />
      <div className="filter-container">
        <label>Status Filter :</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not_completed">Not Completed</option>
        </select>
      </div>
      <TodoList todos={filteredTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

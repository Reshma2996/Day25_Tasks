// src/components/TodoForm.js
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({ name: '', description: '', status: 'not_completed' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.name && todo.description) {
      addTodo({ ...todo, id: Date.now() });
      setTodo({ name: '', description: '', status: 'not_completed' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        name="name"
        placeholder="Todo Name"
        value={todo.name}
        onChange={handleChange}
        className="input-field"
      />
      <input
        type="text"
        name="description"
        placeholder="Todo Description"
        value={todo.description}
        onChange={handleChange}
        className="input-field"
      />
      <button type="submit" className="add-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;

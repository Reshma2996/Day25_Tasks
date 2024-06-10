// src/components/TodoItem.js
import React, { useState } from 'react';

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ ...todo });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    updateTodo(editedTodo);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editedTodo.name}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="text"
            name="description"
            value={editedTodo.description}
            onChange={handleChange}
            className="input-field"
          />
          <select
            name="status"
            value={editedTodo.status}
            onChange={handleChange}
            className="input-field"
          >
            <option value="completed">Completed</option>
            <option value="not_completed">Not Completed</option>
          </select>
          <button onClick={handleSave} className="save-button">Save</button>
        </>
      ) : (
        <>
          <h3>Name : {todo.name}</h3>
          <p>Description : {todo.description}</p>
          <div className="status-container">
            <span>Status :</span>
            <select
              name="status"
              value={editedTodo.status}
              onChange={(e) => {
                handleChange(e);
                handleSave();
              }}
              className="status-dropdown"
            >
              <option value="completed">Completed</option>
              <option value="not_completed">Not Completed</option>
            </select>
          </div>
          <div className="button-container">
            <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;

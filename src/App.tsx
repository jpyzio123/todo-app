import React, { useState, useCallback } from 'react';
import './style.css';
import { MemoList } from './List';
import { TodoForm } from './Form';

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (title, description) => {
    const newTodo = {
      title,
      description,
    };
    setTodos((currentTodos) => [...currentTodos, newTodo]);
  };

  const handleDelete = useCallback(
    (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    },
    [todos]
  );

  return (
    <div className="todo-list">
      <h1>Jira v2</h1>
      <TodoForm onSubmit={handleSubmit} />
      <MemoList todos={todos} onDelete={handleDelete} />
    </div>
  );
}

export default ToDoList;

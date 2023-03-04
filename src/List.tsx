import React, { useState, memo } from 'react';
import { DropdownList } from './Dropdown';

function List({ todos, onDelete }) {
  const handleStatusChange = (status) => {
    const newStatus = status;
  };

  return (
    <ul className="todo-items">
      {todos.map(({ todo }) => (
        <ListElement todo={todo} onDelete={() => onDelete(todo.index)} />
      ))}
    </ul>
  );
}

function ListElement(todo, onDelete) {
  return (
    <li key={todo.index}>
      <ul>
        <li>Title:{todo.title}</li>
        <li>Description:{todo.description}</li>
        <li>Status:{status}</li>
      </ul>
      <DropdownList />
      <button className="deleteButton" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export const MemoList = memo(List);

export default MemoList;

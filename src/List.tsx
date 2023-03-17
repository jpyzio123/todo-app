import React, { useState, memo, useContext } from "react";
import { DropdownList } from "./Dropdown";
import { context } from "./App";

function List() {
  const { todos } = useContext(context);
  return (
    <ul className="todo-items">
      {todos.map((todo) => (
        <ListElement todo={todo} />
      ))}
    </ul>
  );
}

function ListElement({ todo }) {
  const [selectedStatus, setSelectedStatus] = useState("Open");
  const { deleteTodo } = useContext(context);
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li key={todo.id}>
      <ul>
        <li>Title:{todo.title}</li>
        <li>Description:{todo.description}</li>
        <li>Status:{selectedStatus}</li>
      </ul>
      <DropdownList
        status={selectedStatus}
        onChange={(event) => setSelectedStatus(event.target.value)}
      />
      <button className="deleteButton" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export const MemoList = memo(List);

export default MemoList;

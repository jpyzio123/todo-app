import React, { useState, memo } from "react";
import { DropdownList } from "./Dropdown";

function List({ todos, onDelete }) {
  {
    return (
      <ul className="todo-items">
        {todos.map((todo, index) => (
          <ListElement todo={todo} onDelete={() => onDelete(index)} />
        ))}
      </ul>
    );
  }

  function ListElement({ todo, onDelete }) {
    const [selectedStatus, setSelectedStatus] = useState("Open");

    return (
      <li key={todo.index}>
        <ul>
          <li>Title:{todo.title}</li>
          <li>Description:{todo.description}</li>
          <li>Status:{selectedStatus}</li>
        </ul>
        <DropdownList
          status={selectedStatus}
          onChange={(event) => setSelectedStatus(event.target.value)}
        />
        <button className="deleteButton" onClick={onDelete}>
          Delete
        </button>
      </li>
    );
  }
}

export const MemoList = memo(List);

export default MemoList;

import React, { useState, useContext, Fragment } from "react";
import { context } from "./App";

export function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { setTodos } = useContext(context);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (title, description) => {
    const newTodo = {
      id: Math.random().toString(),
      title,
      description,
    };
    setTodos((currentTodos) => [...currentTodos, newTodo]);
  };

  return (
    <Fragment>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <button type="submit">Add</button>
      </form>
    </Fragment>
  );
}

export default TodoForm;

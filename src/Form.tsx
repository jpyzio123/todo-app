import React, { useState } from 'react';

export function TodoForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(title, description);
        setTitle('');
        setDescription('');
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
  );
}

export default TodoForm;

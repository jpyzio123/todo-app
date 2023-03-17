import React, { useState, useCallback, createContext } from "react";
import "./style.css";
import { MemoList } from "./List";
import { TodoForm } from "./Form";

export const context = createContext(null);

function ToDoList() {
  return (
    <ContextProvider>
      <div className="todo-list">
        <h1>Jira v2</h1>
        <TodoForm />
        <MemoList />{" "}
      </div>
    </ContextProvider>
  );
}

function ContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const deleteTodo = useCallback(
    (idToDelete) => {
      const newTodos = todos.filter((todo) => todo.id !== idToDelete);
      setTodos(newTodos);
      //id set Math.random().toString()
    },
    [todos]
  );

  return (
    <context.Provider value={{ todos, setTodos, deleteTodo }}>
      {children}
    </context.Provider>
  );
}

export default ToDoList;

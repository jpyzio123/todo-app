import React, { useState, useCallback, createContext } from "react";
import "./style.css";
import { MemoList } from "./List";
import { TodoForm } from "./Form";

export const context = createContext(null);

function App() {
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

function useTodos() {
  const [todos, setTodos] = useState([]);
  const deleteTodo = useCallback(
    (idToDelete) => {
      const newTodos = todos.filter((todo) => todo.id !== idToDelete);
      setTodos(newTodos);
    },
    [todos]
  );

  const addTodo = (title, description) => {
    const newTodo = {
      id: Math.random().toString(),
      title,
      description,
    };

    setTodos((currentTodos) => [...currentTodos, newTodo]);
  };

  return {
    todos,
    addTodo,
    deleteTodo,
  };
}

function ContextProvider({ children }) {
  const { todos, addTodo, deleteTodo } = useTodos();

  return (
    <context.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </context.Provider>
  );
}

export default App;

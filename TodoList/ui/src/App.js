import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import APIHelper from "./APIHelper.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const fetchTodoAndSetTodos = async () => {
      const todos = await APIHelper.getAllTodos();
      setTodos(todos);
    };
    fetchTodoAndSetTodos();
  }, []);

  const createTodo = async (e) => {
    e.preventDefault();
    if (!todo) {
      alert("please enter something");
      return;
    }
    if (todos.some(({ task }) => task === todo)) {
      alert(`Task: ${todo} already exists`);
      return;
    }
    const newTodo = await APIHelper.createTodo(todo);
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = async (e, id) => {
    try {
      e.stopPropagation();
      await APIHelper.deleteTodo(id);
      setTodos(todos.filter(({ _id: i }) => id !== i));
    } catch (err) {
      console.log(err);
    }
  };

  const updateTodo = async (e, id) => {
    e.stopPropagation();
    const payload = {
      completed: !todos.find((todo) => todo._id === id).completed,
    };
    const updatedTodo = await APIHelper.updateTodo(id, payload);
    setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
  };

  return (
    <div className="container">
      <div className="col-6 mx-auto">
        <h1 className="p-3 text-center">Todo List</h1>
        <div className="form-row align-items-center mb-4">
          <div className="col-10">
            <input
              id="todo-input"
              type="text"
              value={todo}
              onChange={({ target }) => setTodo(target.value)}
              className="form-control"
            />
          </div>
          <div className="col-auto">
            <button
              type="button"
              onClick={createTodo}
              className="btn btn-primary"
            >
              Add
            </button>
          </div>
        </div>

        <ul className="list-group">
          {todos.map(({ _id, task, completed }, i) => (
            <li
              key={i}
              onClick={(e) => updateTodo(e, _id)}
              className={
                completed ? "completed list-group-item" : "list-group-item"
              }
            >
              {task}
              <button type="button" class="close" aria-label="Close">
                <span onClick={(e) => deleteTodo(e, _id)} aria-hidden="true">
                  &times;
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

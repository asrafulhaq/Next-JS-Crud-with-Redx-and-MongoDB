"use client";

import { useDispatch, useSelector } from "react-redux";
import { selectTodo } from "./todoSlice";
import { useEffect, useState } from "react";
import { createTodo, deleteTodo, fetchTodos } from "./todoApi";

const TodoPage = () => {
  const { todos } = useSelector(selectTodo);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    priority: "",
  });

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(input));
  };

  const handleTodoDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={input.name}
          name="name"
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Priority"
          value={input.priority}
          name="priority"
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              {item.name}{" "}
              <button onClick={() => handleTodoDelete(item._id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoPage;

"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUsers, fetchUsers } from "./userApi";

const UserPage = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    email: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(createUsers(input));
  };

  useEffect(() => {
    dispatch(fetchUsers());
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
          placeholder="Email"
          value={input.email}
          name="email"
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="gender"
          value={input.gender}
          name="gender"
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
      <hr />
      <ul></ul>
    </div>
  );
};

export default UserPage;

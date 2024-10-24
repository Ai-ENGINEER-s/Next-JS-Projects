"use client";

import { useState } from "react";
import axios from "axios";

const Home = (e) => {
    e.preventDefault();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = ("");
  const handleUserData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users", { name, email, password });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleUserData}>
      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />

  <input
        type="password"
        placeholder="enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Home;

import React, { useEffect } from "react";
import { useState } from "react";

const API = process.env.REACT_APP_API;

export const Users = () => {
  const getUsers = async () => {
    const res = await fetch(`${API}/api/users`);
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="container">
      <div className="col-md-4">
        <form onSubmit={handleSubmit} className="card card-body">
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={username}
              className="form-control"
              placeholder="Name"
              autoFocus
            />
          </div>
          <br/>
          <div className="form-group">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form-control"
              placeholder="Password"
            />
          </div>
          <br/>
          <button className="btn btn-primary btn-block">Create</button>
        </form>
      </div>
    </div>
  );
};

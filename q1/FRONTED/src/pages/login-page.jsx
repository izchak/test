import React from "react";
import { useState } from "react";
import { userService } from "../services/userService";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuth(username, password);
  };

  const handleAuth = (username, password) => {
    const user = userService.login(username, password);

    user.then((value) => {
      if (value === true) {
        navigate("/home");
      }
    });
  };
  return (
    <div className="login_container">
      <div className="from_container">
        <h1>Login</h1>
        <form className="login_form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn-login">Login</button>
        </form>
        <div className="auth-switch">
          <p>
            Don't have an account?{" "}
            <button onClick={() => navigate("/register")}>Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

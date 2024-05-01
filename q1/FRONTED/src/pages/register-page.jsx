import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { userService } from "../services/userService";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();

  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();
    const username = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    //check if only lower case
    let userVlid = true;
    for (let i = 0; i < username.length; i++) {
      const char = username[i];
      if (char >= "A" && char <= "Z") userVlid = false;
    }

    if (!userVlid) {
      return setError("username must be lower case");
    }

    // check password length
    if (password.length < 4 || password.length > 8) {
      return setError("Password must be between 4 to 8 characters");
    }
    // check password if heve Capital Letter and symbol

    let hasCapitalLetter = false;
    let hasSymbol = false;
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?";

    for (let i = 0; i < password.length; i++) {
      const char = password[i];
      if (char >= "A" && char <= "Z") hasCapitalLetter = true;
      if (symbols.includes(char)) hasSymbol = true;
    }

    if (!hasCapitalLetter || !hasSymbol) {
      return setError(
        "Password must include one capital letter and one symbol"
      );
    }

    const register = userService.createUser(email, username, password);

    register.then((value) => {
      if (value === true) {
        navigate("/");
      }
    });
  };
  return (
    <div className="login_container">
      <div className="from_container">
        <h1>Signup</h1>
        <form className="login_form" onSubmit={handleRegister}>
          {/* email */}
          <div className="input-wrapper">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" ref={emailRef} required />
          </div>
          {/* username */}
          <div className="input-wrapper">
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" ref={userNameRef} required />
          </div>
          {/* password */}
          <div className="input-wrapper">
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" ref={passwordRef} required />
          </div>
          {/* error message */}
          {error && <div className="error-message">{error}</div>}
          <button className="btn-login">Signup</button>
        </form>
        {/* nav to login */}
        <div className="auth-switch">
          <p>
            Already have an account?{" "}
            <button onClick={() => navigate("/")}>Login</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

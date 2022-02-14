import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import LoginPage from "../LoginPage/LoginPage";
import { Form } from "react-bootstrap";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  return (
    <Form className="loginFormContainer" onSubmit={login}>
      <div>
        <div>
          <h2 className="loginH2">Welcome back!</h2>
          <p className="loginP">
            Please enter your admin username and password
          </p>
        </div>
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}

        <Form.Group>
          <Form.Label htmlFor="username">Username:</Form.Label>
          <Form.Control
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <div>
          <input
            className="btn primaryButton loginPagePrimaryBtn"
            type="submit"
            name="submit"
            value="SIGN IN"
          />
        </div>
      </div>
    </Form>
  );
}

export default LoginForm;

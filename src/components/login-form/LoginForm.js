import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import { LoaderComponent } from "../loader";
import { Form, Button } from "react-bootstrap"
import "./LoginForm.css";

export const LoginForm = ({ login }) => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actions.login(state));
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <Form id="login-form" onSubmit={handleLogin}>
        <Form.Group>

          <Form.Label size="lg" htmlFor="username">Username</Form.Label>
          <Form.Control size="lg"
            type="text"
            name="username"
            value={state.username}
            autoFocus
            required
            onChange={handleChange}
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group>

          <Form.Label size="lg" htmlFor="password">Password</Form.Label>
          <Form.Control size="lg"
            type="password"
            name="password"
            value={state.password}
            required
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Group>

        <Button className="loginButtons" type="submit" disabled={loading}>
          Login
        </Button>
      </Form>
      {loading && <LoaderComponent />}
      {error && (
        <p style={{ color: "red" }}>
          {error !== "" ? "FAILED TO LOGIN" : null}
        </p>
      )}
    </React.Fragment>
  );
};

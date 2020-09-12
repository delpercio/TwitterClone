import React, { useState, useRef } from "react";
import API from "../../utils/api";
import { Card, Button, Form } from "react-bootstrap";
import { findByDisplayValue } from "@testing-library/react";

export function NewMessage() {
  const [message, setMessage] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const input = useRef(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (message === "") {
      setResultMessage("Please enter something");
      return;
    }
    let result = await API.createMessage(message);
    if (result.statusCode === 200) {
      setResultMessage(" New Kweet posted");
    } else {
      setResultMessage("KWEET Failed");
    }
    input.current.value = "";
    setMessage("");
  };
  return (
    <Card className="newMessage">
      <Card.Title>Make a new Kweet!</Card.Title>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={input}
          onChange={(event) => setMessage(event.target.value)}
        ></input>
        <Button>kweet</Button>
      </Form>
      <h3>{resultMessage}</h3>
    </Card>
  );
}

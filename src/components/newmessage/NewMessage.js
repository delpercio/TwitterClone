import React, { useState, useRef } from "react";
import API from "../../utils/api";
import { Card, Button, Form } from "react-bootstrap";

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
    <Card style={{backgroundColor: '#c7feff',border:"0px",paddingTop:'5px' }} className="newMessage">
      <Card.Title style={{textAlign:'center' }}>Make a new Kweet!</Card.Title>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          ref={input}
          onChange={(event) => setMessage(event.target.value)}
        ></Form.Control>
        <Button style={{width: "100%"}} type="submit">kweet</Button>
      </Form>
      <h3>{resultMessage}</h3>
    </Card>
  );
}

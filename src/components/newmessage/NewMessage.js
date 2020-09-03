import React, { useState, useRef } from "react";
import API from "../../utils/api";

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
    <div className="newMessage">
      <h2>Make a new Kweet!</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={input}
          onChange={(event) => setMessage(event.target.value)}
        ></input>
        <button>kweet</button>
      </form>
      <h3>{resultMessage}</h3>
    </div>
  );
}


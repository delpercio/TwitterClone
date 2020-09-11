import React, { useState } from "react";
import api from "../../utils/api";

export const DeleteMessage = () => {
  const [newMessages, setNewMessages] = useState({});

  const onDelete = (id) => {
    api
      .deleteMessage(id)
      .then((data) => {
        let messages = state.messages.filter((message) => {
          return id !== message.id;
        });
        setNewMessages((state) => {
          state.messages = messages;
          return state;
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div>
      <button onClick={onDelete()}></button>
    </div>
  );
};

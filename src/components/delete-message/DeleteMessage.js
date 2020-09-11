import React, { useSelector, useDispatch, useState } from "react";
import { actions } from "../../redux/actions/messages";
import api from "../../utils/api";

export const DeleteMessage = () => {
  const { messages, error } = useSelector((state) => ({
    messages: state.messages.messages,
    error: state.messages.error,
  }));

  const [newMessages, setNewMessages] = useState();

  const [errorMessage, setErrorMessage] = useState();

  const dispatch = useDispatch();

  const onDelete = (id) => {
    api
      .deleteMessage(id)
      .then((data) => {
        let messages = messages.filter((message) => {
          return id !== message.id;
        });
        setNewMessages((state) => {
          state.messages = messages;
          return state;
        });
      })
      .catch((err) => {
        console.log("error", err);
        setErrorMessage((state) => {
          state.error = err;
          return state;
        });
      });
  };

  return (
    <div>
      <button onClick={DeleteMessage}></button>
    </div>
  );
};

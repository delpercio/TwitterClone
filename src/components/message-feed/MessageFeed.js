import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/messages";
import { Loader } from "../loader";
import "./MessageFeed.css";

export const MessageFeed = () => {
  const { loading, messages, error } = useSelector((state) => ({
    loading: state.messages.loading,
    messages: state.messages.messages,
    error: state.messages.error,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getMessages());
    console.log(messages);
  }, []);

  const messagesArray = messages
    ? Object.entries(messages)
    : [{ text: "loading" }];
  const handleMessageArray = () => {
    if (messages) {
      return (
        <>
          {messagesArray.map((message) => (
            <>
              <div className="messages-info">
                <li key={message.id}>{message[1].text}</li>
                <span>UserId: {message[1].username}</span>
                <span>Likes: {messages[1].likes.length}</span>
                <span>Posted: {messages[1].createdAt.toString()}</span>
              </div>
            </>
          ))}
        </>
      );
    } else {
      return Loader;
    }
  };
  return (
    <div className="feed">
      <div className="messages">{handleMessageArray()}</div>
    </div>
  );
};

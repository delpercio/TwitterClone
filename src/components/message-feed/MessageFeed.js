import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/messages";
import { LoaderComponent } from "../loader";
import styled from "styled-components";
import { MenuContainer } from "../../components";
import "./MessageFeed.css";


const TitleHeader = styled.h2`
  display: flex;
  justify-content: center;
`;

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
        <div>
          <TitleHeader>Messages</TitleHeader>
          {messagesArray.map((message) => (
            <div className="messages-info">
              <li key={message.id}>{message[1].text}</li>
              <span>UserId: {message[1].username}</span>
              <span>Likes: {messages[1].likes.length}</span>
              <span>Posted: {messages[1].createdAt.toString()}</span>
              <button>Like/Unlike(In development Stage)</button>
            </div>
          ))}
        </div>
      );
    } else {
      return <LoaderComponent/>;
    }
  };

  return (
    <div className="feed">
      <div className="menu-container">
        <MenuContainer />
      </div>
      <div className="messages">{handleMessageArray()}</div>
    </div>
  );
};

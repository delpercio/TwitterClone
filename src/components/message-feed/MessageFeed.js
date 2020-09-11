import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/messages";
import { Loader } from "../loader";
import styled from "styled-components";
import { MenuContainer } from "../../components";
import "./MessageFeed.css";
import { likeMessageAction } from "../../redux/actions/likes";
import { unlikeMessageAction } from "../../redux/actions/likes";

const TitleHeader = styled.h2`
  display: flex;
  justify-content: center;
`;

export const MessageFeed = () => {
  const currentUsername = useSelector((state) => state.auth.username);
  const { loading, messages, error } = useSelector((state) => ({
    loading: state.messages.loading,
    messages: state.messages.messages,
    error: state.messages.error,
    id: state.messages.id,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getMessages());
    handleMessageArray();
    console.log(messages);
  }, []);

  const handleLikeClick = (event, messageId) => {
    console.log(messageId);
    dispatch(likeMessageAction(messageId));
  };

  const handleUnlikeClick = (event, likesArr) => {
    console.log(likesArr);
    console.log(currentUsername);
    for (let i = 0; i < likesArr.length; i++) {
      if (likesArr[i].username === currentUsername) {
        console.log(likesArr[i].id);
        dispatch(unlikeMessageAction(likesArr[i].id));
      }
    }
  };

  const messagesArray = messages
    ? Object.entries(messages)
    : [{ text: "loading" }];

  const handleMessageArray = () => {
    if (messages) {
      return (
        <div>
          <TitleHeader>Messages</TitleHeader>
          {messagesArray.map((message, indexNum) => (
            <div key={messages[indexNum].id} className="messages-info">
              <li key={message.id}>{message[1].text}</li>
              <span>UserId: {message[1].username}</span>
              <span>Likes: {messages[1].likes.length}</span>
              <span>Posted: {messages[1].createdAt.toString()}</span>
              <button
                onClick={(e) => handleLikeClick(e, messages[indexNum].id)}
              >
                Like
              </button>
              <button
                onClick={(e) => handleUnlikeClick(e, messages[indexNum].likes)}
              >
                Unlike
              </button>
            </div>
          ))}
        </div>
      );
    } else {
      return Loader;
    }
  };

  return (
    <div className="feed">
      <div className="menu-container">
        <MenuContainer />
      </div>
      {loading && <Loader />}
      <div className="messages">{handleMessageArray()}</div>
    </div>
  );
};

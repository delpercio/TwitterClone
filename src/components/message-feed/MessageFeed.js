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
    console.log(messages);
  }, []);

  const handleLikeClick = (event, messageId) => {
    dispatch(likeMessageAction(messageId));
  };

  const handleUnlikeClick = (event, likesArr) => {
    console.log(likesArr);
    console.log(currentUsername);
    for (let i = 0; i < likesArr.length; i++) {
      if (likesArr[i].username === currentUsername) {
        dispatch(unlikeMessageAction(likesArr[i].id));
      }
    }
  };

  return (
    <div className="feed">
      <div className="menu-container">
        <MenuContainer />
      </div>
      {loading && <Loader />}
      <div className="messages">{ messages && <div>
          <TitleHeader>Messages</TitleHeader>
          {/* {console.log(messagesArray)} */}
          {messages.map((message, indexNum) => (
            <div key={messages[indexNum].id} className="messages-info">
              <span key={message.id}>{message.text}</span>
              <span>UserId: {message.username}</span>
              <span>Likes: {message.likes.length}</span>
              <span>Posted: {message.createdAt.toString()}</span>
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
        </div>}</div>
    </div>
  );
};

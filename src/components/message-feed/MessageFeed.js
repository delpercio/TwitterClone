import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/messages";
import { LoaderComponent } from "../loader";
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
  const { loading, messages } = useSelector((state) => ({
    loading: state.messages.loading,
    messages: state.messages.messages,
    id: state.messages.id,
  }));

  const dispatch = useDispatch();

  const fetchMessages = useCallback(() => {
      dispatch(actions.getMessages());
    },
    [dispatch],
  )
  useEffect(() => {
    fetchMessages()
  }, [fetchMessages]);

  const handleLikeClick = (event, messageId) => {
    dispatch(likeMessageAction(messageId));
  };

  const handleUnlikeClick = (event, likesArr) => {
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
      <div className="centered">
        {loading && <LoaderComponent />}
        </div>
      <div className="messages">{ messages && <div>
          <TitleHeader>Messages</TitleHeader>
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

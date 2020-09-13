import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/messages";
import { LoaderComponent } from "../loader";
import { MenuContainer } from "../../components";
import "./MessageFeed.css";
import { likeMessageAction } from "../../redux/actions/likes";
import { unlikeMessageAction } from "../../redux/actions/likes";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
  }, [dispatch]);
  useEffect(() => {
    fetchMessages();
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
    <>
      
        <MenuContainer />
    
      <div className="feed">
        <div className="centered">{loading && <LoaderComponent />}</div>

        <div className="messages">
          <h1>Message Feed</h1>
          {messages && (
            <div>
              {messages.map((message, indexNum) => (
                <Card
                  style={{ textAlign: "center" }}
                  key={messages[indexNum].id}
                  className="messages-info"
                >
                  <Card.Title key={message.id}>{message.text}</Card.Title>
                  <Card.Body>
                    <Card.Text>User: {message.username}</Card.Text>
                    <Card.Text>Likes: {message.likes.length}</Card.Text>
                    <Card.Text>Posted: {message.createdAt}</Card.Text>
                  </Card.Body>
                  <Button
                    className="likes"
                    onClick={(e) => handleLikeClick(e, messages[indexNum].id)}
                  >
                    Like
                  </Button>
                  <Button
                    className="likes"
                    onClick={(e) =>
                      handleUnlikeClick(e, messages[indexNum].likes)
                    }
                  >
                    Unlike
                  </Button>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

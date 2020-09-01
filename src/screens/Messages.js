import React from "react";
import { MessageFeedContainer } from "../components";

export const MessageScreen = () => {
  return (
    <div>
      <div className="message-header">
        <h2>Messages</h2>
      </div>

      <MessageFeedContainer />
    </div>
  );
};

import React from "react";
import '../styles/PostPage.css'

export const VoteCounter = () => {
  return (
    <div className="votes">
        <img
          className="upvote"
          alt="upvote"
          src="https://image.flaticon.com/icons/svg/2316/2316622.svg"
        />
        <p>5</p>
        <img
          className="downvote"
          alt="downvote"
          src="https://image.flaticon.com/icons/svg/2316/2316643.svg"
        />
      </div>
  );
};

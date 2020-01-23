import React from "react";
import {VoteCounter} from "../VoteCounter";
import '../../styles/styles.css'

export const Comment = () => {
  return (
    <div className="comment">
      <div className = "ltr">
      <VoteCounter />
      <div>
      <small>randomuser X hours ago </small>
      <div className = "commentbody">This is a dummy Comment</div>
      </div>
      </div>
    </div>
  );
};
import React from "react";
import "../../styles/PostPage.css";
import { Comment } from "./Comment";
import {VoteCounter} from "../VoteCounter"

export default class PostCard extends React.Component {
  render() {
    return (
      
      <div className="card-wrapper">
        <div className = "ltr">
        {/* <div className="votes">
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
      </div> */}
      <VoteCounter />
      <div>
        <span className = "bold">r/RandomSubreddit . </span>
        <span>Posted by u/randomuser X hours ago </span>
        <h3 className = "larger">This is the post' title</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <hr />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      </div>
      </div>
    );
  }
}
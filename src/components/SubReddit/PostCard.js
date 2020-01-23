import React from "react";
import "../../styles/PostPage.css";
import { Comment } from "../SubReddit/Comment";
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
        <Comment body = "Sawyer, you're going out a youngster, but you've got to come back a star!" username = "tommysaw" hours = "5" subcomment = {[{username:"desertson", hours: "4", body:"Well, here's another nice mess you've gotten me into!" }]}/>
        <Comment body = "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?" username = "70srock" hours = "5" subcomment = {[{username:"scarface", hours: "3", body:"Say hello to my little friend!", subcomment:[{username:"swigert13", hours:"1", body:"Houston, we have a problem."}] },{username:"deadpoet", hours: "3", body:"Carpe diem. Seize the day, boys. Make your lives extraordinary." }]}/>
        <Comment body = "I want to be alone." username = "grandhotel" hours = "5" subcomment = {[]}/>
        <Comment body = "You're gonna need a bigger boat." username = "jawguy85" hours = "5" subcomment = {[]}/>
      </div>
      </div>
      </div>
    );
  }
}

import React from "react";
import {VoteCounter} from "../VoteCounter";
import '../../styles/styles.css'

export const Comment = (props) => {
  //subcomment = this.props.subcomment;
  var body = props.body;
  var username = props.username;
  var hours = props.hours;
  var subcomment = props.subcomment;
  return (
    <div className="comment">
      <div className = "ltr">
        <div>
      <VoteCounter />
      <div className = "line">
        
      </div>
      </div>
      <div>
      <small>{username} {hours} hours ago </small>
      <div className = "commentbody">{body}</div>
      </div>
      </div>
      <div className = "redditline">
        {subcomment? 
          <div>{
              props.subcomment.map(
                function(val, ind){
                  return <Comment username = {val.username} hours = {val.hours} body = {val.body} 
                    subcomment = {val.subcomment?val.subcomment:[]}
                  /> 
                }
              )
          }
          </div>: <div></div>
        }
      </div>
      </div>
  );
};

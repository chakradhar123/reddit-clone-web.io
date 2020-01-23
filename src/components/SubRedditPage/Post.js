import React from "react";

import "../../styles/styles.css";

export default function Posts() {
  return (
    <div className="post">
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
      <div className="post-right">
        <p className="post-user">Posted my chakri</p>
        <p className="post-text">A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also </p>
        <div className="lowerBar">
        <div className="comment-head">17 Comments</div>
        <div className="comment-head">Share</div>
        <div className="comment-head">Save</div>
      </div>
      </div>
      
    </div>
  );
}

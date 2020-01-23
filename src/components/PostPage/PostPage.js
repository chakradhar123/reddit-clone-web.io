import React from "react";

import PostCard from "./PostCard"
import SubInfo from "./SubInfo"

import "../../styles/styles.css";

export default function PostList() {
  return (
    <div className="PostList">
      
      <div className="post-wrapper">
        <div className="column-1">
          <PostCard />
        </div>

        <div className="column-2">
          <SubInfo />
          <SubInfo />
        </div>
      </div>

    </div>
  );
}
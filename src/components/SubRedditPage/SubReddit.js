import React from "react";

import Post from "./Post";

import SideCard from "./SideCard";
import "../../styles/styles.css";


export default class SubReddit extends React.Component{
  state={
    posts:[{name:"chakri",text:"A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also " },{name:"chakri",text:"A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also " },{name:"chakri",text:"A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also A Lorem generator, doing William Gibson or Goethe or Buzzwords style none-sense filler text. You can also " }]
  }
  render(){
  return (
    <div className="SubReddit">
    
      <h2 id="post-head"> Posts</h2>
      <div className="main-wrapper">
        <div className="Post-List">
          {this.state.posts.map((index,post)=>{
            return <div key={index} > <Post name={post.name} text={post.text} /></div>
          })}
          
        </div>
        <SideCard />
      </div>
    </div>
  );
  }
}
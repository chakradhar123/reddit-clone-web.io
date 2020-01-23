import React,{} from "react";
import Navbar from "./components/Navbar";
import PostList from "./components/PostPage/PostPage"
import SubReddit from "./components/SubRedditPage/SubReddit"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./styles/styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>

        <Switch>
          <Route exact path="/" >
            <SubReddit/>
          </Route>
          <Route exact path="/post" >
            <PostList/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

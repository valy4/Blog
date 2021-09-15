import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PostPage from "./components/PostPage";
import "./App.css";
import CreatePost from "./components/CreatePost";

// const apiUrl = "http://localhost:3004/posts"
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/create-post">
            <CreatePost />
          </Route>
          <Route path="/posts/:postId">
            <PostPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

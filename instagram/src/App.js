import React, { Component } from 'react';
import PostsPage from "./components/PostContainer/PostsPage";
import './App.css';
import Authenticate from "./components/Authentication/Authenticate";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostsPage/>
      </div>
    );
  }
}

const auth = Authenticate(App);

export default auth;

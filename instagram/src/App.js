import React, { Component } from 'react';
import PostsPage from "./components/PostContainer/PostsPage";
import './App.css';
import Authenticate from "./components/Authentication/Authenticate";
import Login from "./components/Login/Login";

class App extends Component {
  render() {
    return (
      <>
        <PostsPage username={this.props.username}/>
      </>
    );
  }
}

const auth = Authenticate(App)(Login);

export default auth;

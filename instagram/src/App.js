import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="post-list">
              {dummyData.map((obj) =>
              <PostContainer post={obj} key={obj.timestamp}/>
              )}
        </div>
      </div>
    );
  }
}

export default App;

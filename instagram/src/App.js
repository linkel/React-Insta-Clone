import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts : [],
    }
  }
  componentDidMount() {
    this.setState({posts: dummyData})
  }

  handleAddComment = (event, timestamp) => {
    event.preventDefault();
    let username = "temporary"
    let comment = event.target[0].value
    let object = this.state.posts
      for (let i in object) {
        if (object[i].timestamp === timestamp) {
           object[i].comments.push({username: username, text: comment})
           break;
      }
    }
    this.setState({posts : object});
  }

  render() {
    return (
      <div className="App">
        <div className="search-bar">
          <SearchBar/>
        </div>
        <div className="post-list">
              {this.state.posts.map((obj) =>
              <PostContainer handleAddComment={this.handleAddComment} post={obj} key={obj.timestamp}/>
              )}
        </div>
      </div>
    );
  }
}

export default App;

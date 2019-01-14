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

  handleAddComment = (event, index) => {
    event.preventDefault();
    let username = "temporary"
    let comment = event.target[0].value
    let object = this.state.posts
      for (let i in object) {
        console.log(i)
        console.log(parseInt(index))
        if (parseInt(i) === parseInt(index)) {
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
              <PostContainer handleAddComment={this.handleAddComment} post={obj} index={this.state.posts.indexOf(obj)} key={this.state.posts.indexOf(obj)}/>
              )}
        </div>
      </div>
    );
  }
}

export default App;

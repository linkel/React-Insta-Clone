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
      filtered_posts: [],
      searching : false,
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
        if (parseInt(i) === parseInt(index)) {
           object[i].comments.push({username: username, text: comment})
           break;
      }
    }
    this.setState({posts : object});
  }

  handleLikes = (event, index) => {
    let object = this.state.posts;
    console.log(event);
    for (let i in object) {
      if (parseInt(i) === parseInt(index)) {
         object[i].likes += 1;
         break;
      }
    }
    this.setState({posts : object});
  }

  handleSearch = (event) => {
    console.log(event.target.value);
    let string = event.target.value;
    let obj = this.state;
    if (string.length > 0) {
      const searched_array = obj.posts.filter( item => { return (item.username.toUpperCase().indexOf(string.toUpperCase()) > -1)});
      obj.filtered_posts = searched_array;
      obj.searching = true;
      this.setState(obj)
    }
    else if (string.length === 0) {
      obj.filtered_posts = [];
      obj.searching = false;
      this.setState(obj)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="search-bar">
          <SearchBar handleSearch={this.handleSearch}/>
        </div>
        <div className="post-list">
          { this.state.searching ? this.state.filtered_posts.map((obj) =>
              <PostContainer handleLikes={this.handleLikes} handleAddComment={this.handleAddComment} post={obj} index={this.state.posts.indexOf(obj)} key={this.state.posts.indexOf(obj)}/>)
               :
                this.state.posts.map((obj) =>
              <PostContainer handleLikes={this.handleLikes} handleAddComment={this.handleAddComment} post={obj} index={this.state.posts.indexOf(obj)} key={this.state.posts.indexOf(obj)}/>
              )}
        </div>
      </div>
    );
  }
}

export default App;

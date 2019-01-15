import React from "react";
import PostContainer from "../PostContainer/PostContainer";
import SearchBar from "../SearchBar/SearchBar";
import dummyData from "../../dummy-data";
import styled from 'styled-components';

const PostList = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 136px auto 0 auto;   /* 76px is height of searchbar */
  display: flex;
  flex-direction: column;
`;

const SearchBarStyle = styled.div`
  position: fixed;
  top: 0;
  height: 76px;
  width: 100%;
  border-bottom: 2px solid #e2e2e2;
  z-index: 10;
  background: #fff;
`;

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      filtered_posts: [],
      searching: false
    };
  }

  componentDidMount() {
    if (!localStorage.getItem("posts")) {
      this.setState({ posts: dummyData });
    } else {
      this.setState({ posts: JSON.parse(localStorage.getItem("posts")) });
    }
  }

  handleAddComment = (event, index) => {
    //event.preventDefault(); // Removing this takes advantage of the default refreshing and entry clearing
    let username = this.props.username;
    let comment = event.target[0].value;
    let object = this.state.posts;
    for (let i in object) {
      if (parseInt(i) === parseInt(index)) {
        object[i].comments.push({ username: username, text: comment });
        break;
      }
    }
    this.setState({ posts: object });
    localStorage.setItem("posts", JSON.stringify(this.state.posts));
  };

  handleLikes = (event, index) => {
    let object = this.state.posts;
    for (let i in object) {
      if (parseInt(i) === parseInt(index)) {
        object[i].likes += 1;
        break;
      }
    }
    this.setState({ posts: object });
  };

  handleSearch = event => {
    let string = event.target.value;
    let obj = this.state;
    if (string.length > 0) {
      const searched_array = obj.posts.filter(item => {
        return item.username.toUpperCase().indexOf(string.toUpperCase()) > -1;
      });
      obj.filtered_posts = searched_array;
      obj.searching = true;
      this.setState(obj);
    } else if (string.length === 0) {
      obj.filtered_posts = [];
      obj.searching = false;
      this.setState(obj);
    }
  };

  render() {
    return (
      <>
        <SearchBarStyle>
          <SearchBar searching={this.state.searching} handleSearch={this.handleSearch} />
        </SearchBarStyle>
        <PostList>
          {this.state.searching
            ? this.state.filtered_posts.map(obj => (
                <PostContainer
                  handleLikes={this.handleLikes}
                  handleAddComment={this.handleAddComment}
                  post={obj}
                  index={this.state.posts.indexOf(obj)}
                  key={this.state.posts.indexOf(obj)}
                />
              ))
            : this.state.posts.map(obj => (
                <PostContainer
                  handleLikes={this.handleLikes}
                  handleAddComment={this.handleAddComment}
                  post={obj}
                  index={this.state.posts.indexOf(obj)}
                  key={this.state.posts.indexOf(obj)}
                />
              ))}
        </PostList>
      </>
    );
  }
}

export default PostsPage;

import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from "prop-types";
import Post from './Post';

const PostContainer = (props) => {
    return (
        <div className="post-container">
            <Post/>
            <CommentSection handleAddComment={props.handleAddComment} comments={props.post.comments} timestamp = {props.post.timestamp} key={props.post.timestamp}/>
        </div>
    )
}

PostContainer.propTypes = {
    post: PropTypes.object
}

export default PostContainer
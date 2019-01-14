import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from "prop-types";
import Post from './Post';

const PostContainer = (props) => {
    return (
        <div className="post-container">
            <Post username={props.post.username} thumbnail={props.post.thumbnailUrl} image={props.post.imageUrl} likes={props.post.likes}/>
            <CommentSection handleAddComment={props.handleAddComment} comments={props.post.comments} timestamp = {props.post.timestamp} index={props.index} key={props.index}/>
        </div>
    )
}

PostContainer.propTypes = {
    post: PropTypes.object
}

export default PostContainer
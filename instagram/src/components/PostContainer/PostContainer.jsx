import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from "prop-types";
import Post from './Post';
import styled from 'styled-components';

const PostContainerStyles = styled.div`
    border: 1px solid rgb(219, 219, 219);
    max-width: 615px;
    width: 100%;
    margin: 0 0 50px 3.2%;
`;

const PostContainer = (props) => {
    return (
        <PostContainerStyles>
            <Post index={props.index} handleLikes={props.handleLikes} username={props.post.username} thumbnail={props.post.thumbnailUrl} image={props.post.imageUrl} likes={props.post.likes}/>
            <CommentSection handleAddComment={props.handleAddComment} comments={props.post.comments} timestamp = {props.post.timestamp} index={props.index} key={props.index}/>
        </PostContainerStyles>
    )
}

PostContainer.propTypes = {
    post: PropTypes.object
}

export default PostContainer
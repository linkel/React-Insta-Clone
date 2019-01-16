import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentStyle = styled.div`
    display: flex;
    margin: 0 20px 0 13px;
    `;

const CommentText = styled.div`
    margin: 0 0 0 5px;
    `;

const Comment = (props) => {
    return (
        <CommentStyle>
            <b>{props.username}</b>
            <CommentText>{props.text}</CommentText>
        </CommentStyle>
    )
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
}

export default Comment;
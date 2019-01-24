import React from 'react';
import Comment from "./Comment";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentForm = styled.form`
    margin: 10px 13px 10px 13px;

`;

const CommentInput = styled.input`
    width: 100%;
    border: 0;
    border-top: 1px solid rgb(219, 219, 219);
`;

const CommentSection = (props) => {
    return (
        <div className="comment-section">
            {props.comments.map((obj) =>
            <Comment username={obj.username} text={obj.text} key={obj.text}/>
            )}
            <CommentForm onSubmit={(e) => props.handleAddComment(e, props.index)}>
                <CommentInput type="text" placeholder="Add a comment..."></CommentInput>
            </CommentForm>
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;
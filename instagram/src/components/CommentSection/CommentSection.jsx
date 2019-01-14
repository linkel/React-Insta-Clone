import React from 'react';
import Comment from "./Comment";
import PropTypes from "prop-types";

const CommentSection = (props) => {
    return (
        <div className="comment-section">
            {props.comments.map((obj) =>
            <Comment username={obj.username} text={obj.text} key={obj.text}/>
            )}
            <form onSubmit={(e) => props.handleAddComment(e, props.index)}>
                <input type="text" placeholder="Add a comment..."></input>
            </form>
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;
import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
    return (
        <div className='comment'>
            <b>{props.username}</b>
            {props.text}
        </div>
    )
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
}

export default Comment;
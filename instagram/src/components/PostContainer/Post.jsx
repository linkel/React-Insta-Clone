import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <img src={props.image}/>
        </div>
    )
}

export default Post
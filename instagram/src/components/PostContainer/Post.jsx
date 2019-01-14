import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <div className="post-header">
                <img className="thumbnail" alt="thumbnail" src={props.thumbnail}/>
                {props.username}
            </div>
            <img alt="big" src={props.image}/>
            <div className="post-footer">
                <div className="post-footer-top">
                    <div>
                        <img className="icon-heart" alt="heart" src={require('../../img/heart.svg')}/>
                        <img className="icon-speech" alt="speech" src={require('../../img/speech.png')}/>
                    </div>
                    <img className="icon-bookmark" alt="bookmark" src={require('../../img/bookmark.svg')}/>
                </div>
                <div className="post-footer-bottom">
                    {props.likes} likes
                </div>
            </div>
        </div>
    )
}

export default Post
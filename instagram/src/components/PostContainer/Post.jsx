import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const IconHeart = styled.img`
    width: 31px;
    height: 30px;
    margin-right: 10px;
    cursor: pointer;
  `
const IconSpeech = styled.img`
  .icon-speech {
    width: 34px;
    height: 28px;
    cursor: pointer;
  `;
  
const IconBookmark = styled.img`
    width: 28px;
    height: 24px;
    cursor: pointer;
`;
  
const Thumbnail = styled.img`
    border-radius: 100px;
    height: 30px;
    width: 30px;
    z-index: 1;
`;
  
const PostHeader = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 18px 3% 18px 3%;
    background: #fff;
`;
  
const PostFooterTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;
  
const PostFooterBottom = styled.div`
    text-align: left;
    padding: 0 10px 10px 14px;
`;

const UsernameHolder = styled.p`
    font-weight: bold;
    font-size: 14px;
    padding: 0;
    margin: 0 0 0 10px;
`;

const Post = (props) => {
    return (
        <div className="post">
            <PostHeader>
                <Thumbnail alt="thumbnail" src={props.thumbnail}/>
                <UsernameHolder>{props.username}</UsernameHolder>
            </PostHeader>
            <Image alt="big" src={props.image}/>
            <div className="post-footer">
                <PostFooterTop>
                    <div>
                        <IconHeart onClick={(e) => props.handleLikes(e, props.index)} alt="heart" src={require('../../img/heart.svg')}/>
                        <IconSpeech alt="speech" src={require('../../img/speech.png')}/>
                    </div>
                    <IconBookmark alt="bookmark" src={require('../../img/bookmark.svg')}/>
                </PostFooterTop>
                <PostFooterBottom>
                    <b>{props.likes} likes</b>
                </PostFooterBottom>
            </div>
        </div>
    )
}

export default Post
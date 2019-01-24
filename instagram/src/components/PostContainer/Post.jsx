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
    width: 34px;
    height: 28px;
    cursor: pointer;
  `
  
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

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        }
    }
    handleLikes = (e) => {
        this.setState({liked: !this.state.liked})
    }
    render() {
        return (
            <div className="post">
                <PostHeader>
                    <Thumbnail alt="thumbnail" src={this.props.thumbnail}/>
                    <UsernameHolder>{this.props.username}</UsernameHolder>
                </PostHeader>
                <Image alt="big" src={this.props.image}/>
                <div className="post-footer">
                    <PostFooterTop>
                        <div>
                            {this.state.liked ? <IconHeart onClick={
                                (e) => {
                                    this.props.handleLikes(e, this.props.index, this.state.liked); 
                                    this.handleLikes(e);
                                }}
                                
                                alt="heart" src={require('../../img/liked_heart.png')}/>
                                : <IconHeart onClick={
                                    (e) => {
                                        this.props.handleLikes(e, this.props.index, this.state.liked);
                                        this.handleLikes(e);
                                }}
                                alt="heart" src={require('../../img/heart.svg')}/>}
                            <IconSpeech alt="speech" src={require('../../img/speech.png')}/>
                        </div>
                        <IconBookmark alt="bookmark" src={require('../../img/bookmark.svg')}/>
                    </PostFooterTop>
                    <PostFooterBottom>
                        <b>{this.props.likes} likes</b>
                    </PostFooterBottom>
                </div>
            </div>
        )
    }
}

export default Post
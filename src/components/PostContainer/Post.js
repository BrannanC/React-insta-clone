import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';
import moment from 'moment';
import CommentSectionContainer from '../CommentSection/CommentSectionContainer';

const PostContainerDiv = styled.div`
  border: 1px solid lightgray;
  max-width: 640px;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const User = styled.p`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const UserImg = styled.img`
    border-radius: 50%;
    padding: 10px;
    max-width: 40px;
    height: auto;
`;

const Username = styled.span`
    font-weight: bold;
`;

const Timestamp = styled.span`
    color: gray;
`;

const PostImg = styled.img`
    max-width: 100%;
    height: auto;
    
    @media (max-width: 900px){
        .PostContainer .postImage img {
            width: 100%;
            height: auto;
        }
    }
`;

const Post = (props) => {
    return (
        <PostContainerDiv>
            <User>
                <UserImg src={props.postData.thumbnailUrl} alt="User" />
                <Username>{props.postData.username}</Username> <Timestamp> {moment(props.postData.timestamp, 'MMMM Do YYYY, h:mm:ss a').format("MMM Do YY")}</Timestamp> 
            </User>
            <PostImg src={props.postData.imageUrl} alt="Post" />


                <CommentSectionContainer comments={props.postData.comments} likes={props.postData.likes} 
                username={props.username} />

        </PostContainerDiv>
    );
}

Post.propTypes = {
    postData: PropType.shape({
        username: PropType.string,
        thumbnailUrl: PropType.string,
        imageUrl: PropType.string,
        likes: PropType.number,
        timestamp: PropType.string,
        comments: PropType.array
    }),
}

export default Post;
import React from 'react';
import PropType from 'prop-types';
import CommentSectionContainer from '../CommentSection/CommentSectionContainer';

const Post = (props) => {
    return (
        <div className="PostContainer">
            <p className="user"><img src={props.postData.thumbnailUrl} alt="User" /><span className="username">{props.postData.username}</span><span className="timestamp"> {props.postData.timestamp}</span> </p>
            <div className="postImage"><img src={props.postData.imageUrl} alt="Post" /></div>


                <CommentSectionContainer comments={props.postData.comments} likes={props.postData.likes} 
                username={props.username} />

        </div>
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
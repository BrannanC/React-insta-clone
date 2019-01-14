import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
    return (
        <div className="PostContainer">
            <p className="user"><img src={props.postData.thumbnailUrl} alt="User" />{props.postData.username} {props.postData.timestamp}</p>
            <div className="postImage"><img src={props.postData.imageUrl} alt="Post" /></div>
            <div className="CommentSection">
                <div className="likes">
                    <p>{props.postData.likes} Likes</p>
                </div>
                {props.postData.comments.map((x, i)=> <CommentSection comment={x} key={i} />)}
                <input type="text" placeholder="Add a comment" />
            </div>
        </div>
    );
}

export default PostContainer;
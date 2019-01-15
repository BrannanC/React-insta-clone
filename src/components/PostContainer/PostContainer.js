import React from 'react';
import PropType from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
    return (
        <div className="PostContainer">
            <p className="user"><img src={props.postData.thumbnailUrl} alt="User" /><span className="username">{props.postData.username}</span><span className="timestamp"> {props.postData.timestamp}</span> </p>
            <div className="postImage"><img src={props.postData.imageUrl} alt="Post" /></div>
            <div className="CommentSection">
                <div className="likes">
                    <div className="icons">
                        <i className="far fa-2x fa-heart"></i>
                        <i className="far  fa-2x fa-comment"></i>
                    </div>
                    <p>{props.postData.likes} Likes</p>
                </div>
                {props.postData.comments.map((x, i)=> <CommentSection comment={x} key={i} />)}
                <form onSubmit={(e) => props.addComment(e, props.postData)} >
                    <input 
                        type="text" 
                        placeholder="Add a comment..." 
                        name="inputText" 
                        value={props.inputText}
                        onChange={props.handleChange}                         
                    />
                </form>
            </div>
        </div>
    );
}

PostContainer.propTypes = {
    postData: PropType.shape({
        username: PropType.string,
        thumbnailUrl: PropType.string,
        imageUrl: PropType.string,
        likes: PropType.number,
        timestamp: PropType.string,
        comments: PropType.array
    }),
}

export default PostContainer;
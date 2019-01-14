import React from 'react';

const CommentSection = (props) => {
    return (
        <div className="Comment">
            <p>
                <span className="username">{props.comment.username} </span>
                <span className="comment-text">{props.comment.text}</span>
            </p>

        </div>
    );
}

export default CommentSection;
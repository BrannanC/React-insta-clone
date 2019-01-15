import React from 'react';
import PropType from 'prop-types';

const Comment = props => {
    return (
        <div className="Comment">
        <p>
            <span className="username">{props.comment.username} </span>
            <span className="comment-text">{props.comment.text}</span>
        </p>
        </div>
    );
}

Comment.propTypes = {
    comment: PropType.shape({
        username: PropType.string.isRequired,
        text: PropType.string.isRequired
    })

}

export default Comment;
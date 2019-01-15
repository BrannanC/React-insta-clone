import React from 'react';

const CommentInput = (props) => {
    return (
        <form onSubmit={props.commentSubmit} >
            <input 
            type="text" 
            value={props.comment}
            onChange={props.commentChange}
            placeholder="Add comment... "
            />
        </form>
    );
}

export default CommentInput;
import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

const Username = styled.span`
    font-weight: bold;
`;

const CommentText = styled.span`

`;

const Comment = props => {
    return (
        <div className="Comment">
        <p>
            <Username>{props.comment.username} </Username>
            <CommentText>{props.comment.text}</CommentText>
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
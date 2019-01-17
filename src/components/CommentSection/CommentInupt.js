import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    width: 100%;
`;

const Input = styled.input`
    width: 100%;
    font-size: 1.5rem;
    padding: 5px;
    border: none;
    border-top: 1px solid lightgray;
`;

const CommentInput = (props) => {
    return (
        <Form onSubmit={props.commentSubmit} >
            <Input 
            type="text" 
            value={props.comment}
            onChange={props.commentChange}
            placeholder="Add comment... "
            />
        </Form>
    );
}

export default CommentInput;
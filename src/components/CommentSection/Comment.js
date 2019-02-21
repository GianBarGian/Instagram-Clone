import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const CommentStyled = styled.p`
    font-size: 0.9rem;
    span {
        font-weight: bold;
    }
`;


export default function Comment({ comment }) {
    return (
        <CommentStyled>
            <span>{comment.username}</span> {comment.text}
        </CommentStyled>
    )
}

Comment.propTypes = {
    comment: PT.shape({
        username: PT.string,
        text: PT.string
    })
}
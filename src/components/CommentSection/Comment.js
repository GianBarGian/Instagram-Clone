import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import UsernameStyle from '../../Styles/Reusable/UsernameStyle';

const CommentStyled = styled.div`
    font-size: 0.9rem;
    line-height: 1.5;
    display: flex;
    align-items: baseline;
`;


export default function Comment({ comment }) {
    return (
        <CommentStyled>
            <UsernameStyle username={comment.username}/> 
            <p>{comment.text}</p>
        </CommentStyled>
    )
}

Comment.propTypes = {
    comment: PT.shape({
        username: PT.string,
        text: PT.string
    })
}
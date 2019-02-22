import React from 'react';
import styled from 'styled-components';


const AddCommentStyled = styled.form`
    input {
    width: 78%;
    }  
    
    button {
    background: white;
    border: unset;
    padding-left: 5.5%;
    } 
`;

export default function AddComment({ postComment, changeComment, addComment, idx }) {
    return (
        <AddCommentStyled>
            <input type="text" onChange={e => changeComment(idx, e)} value={addComment.text}/>
            <button onClick={event => {
                event.preventDefault();
                postComment(addComment, idx);
            }}>Reply</button>
        </AddCommentStyled>
    )
}
import React from 'react';


export default function AddComment({ postComment, changeComment, addComment, idx }) {
    return (
        <form className="add-comment" >
            <input type="text" onChange={changeComment} value={addComment.text}/>
            <button onClick={event => {
                event.preventDefault();
                postComment(addComment, idx);
            }}>Reply</button>
        </form>
    )
}
import React from 'react';


export default function AddComment({ postComment, changeComment, addComment, id }) {
    return (
        <form className="add-comment" >
            <input type="text" onChange={changeComment} value={addComment.text}/>
            <button onClick={event => {
                event.preventDefault();
                postComment(addComment, id);
            }}>Reply</button>
        </form>
    )
}
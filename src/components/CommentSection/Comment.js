import React from 'react';


export default function Comment({ comment }) {
    return (
        <p><span>{comment.username}</span> {comment.text}</p>
    )
}
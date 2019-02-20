import React from 'react';
import PT from 'prop-types';

export default function Comment({ comment }) {
    return (
        <p><span>{comment.username}</span> {comment.text}</p>
    )
}

Comment.propTypes = {
    comment: PT.shape({
        username: PT.string,
        text: PT.string
    })
}
import React from 'react';
import Comment from './Comment';

export default function CommentSection({ comments }) {
    return (
        <div className="comment-section">
            {comments.map((comment, idx) => <Comment key={idx} comment={comment}/>)}
        </div>
    )
}
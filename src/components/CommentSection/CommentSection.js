import React from 'react';
import PT from 'prop-types';
import Comment from './Comment';

export default function CommentSection({ comments }) {
    return (
        <div>
            {comments.map((comment, idx) => <Comment key={idx} comment={comment}/>)}
        </div>
    )
}

CommentSection.propTypes = {
    comments: PT.arrayOf(PT.object).isRequired
}
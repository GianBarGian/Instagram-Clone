import React from 'react';
import PT from 'prop-types';
import './PostContainer.css';
import Post from './Post';


export default function PostContainer({ data, postComment, changeComment, addComment, updateLikes }) {
    return (
        <section className="post-container">
            {data.map((post, idx) => 
                <Post 
                    postComment={postComment} 
                    changeComment={changeComment} 
                    post={post} 
                    key={idx}
                    idx ={idx}
                    addComment={addComment} 
                    updateLikes={updateLikes}
                />)}
        </section >
    )
}

PostContainer.propTypes = {
    data: PT.arrayOf(PT.object).isRequired
}
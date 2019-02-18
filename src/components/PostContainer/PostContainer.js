import React from 'react';
import PT from 'prop-types';
import './PostContainer.css';
import Post from './Post';


export default function PostContainer({ data }) {
    return (
        <section className="post-container">
            {data.map((post, idx)=> <Post post={post} key={idx} />)}
        </section >
    )
}

PostContainer.propTypes = {
    data: PT.arrayOf(PT.object).isRequired
}
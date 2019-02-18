import React from 'react';
import './PostContainer.css';
import Post from './Post';


export default function PostContainer({ data }) {
    return (
        <section className="post-container">
            {data.map((post, idx)=> <Post post={post} key={idx} />)}
        </section >
    )
}
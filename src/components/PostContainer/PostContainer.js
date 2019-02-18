import React from 'react';
import './PostContainer.css';
import Post from './Post';


export default function PostContainer({ data }) {
    return (
        <div>
            {data.map(post => <Post post={post} />)}
        </div>
    )
}
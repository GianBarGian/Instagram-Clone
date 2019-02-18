import React from 'react';
import heart from "../../assets/heart.svg";
import CommentSection from '../CommentSection/CommentSection';

export default function Post({ post }) {
    return (
        <div className="post">
            <div className="user">
                <img src={post.thumbnailUrl} alt="thumbnail" />
                <h2>{post.username}</h2>
            </div>
            <div className="post-content">
                <img className="main-img" src={post.imageUrl} alt="image" />
                <div className="icons">
                    <img src={heart} alt="heart" />
                    <img src={heart} alt="heart" />
                </div>
                <p className="likes"><span>{post.likes} likes</span></p>
            </div>
            <CommentSection comments={post.comments} />
            <p className="timestamp">{post.timestamp}</p>
        </div>
    )
}
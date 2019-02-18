import React from 'react';
import heart from "../../assets/heart.svg";

export default function Post({ post }) {
    return (
        <section className="post-container">
            <div className="user">
                <img src={post.thumbnailUrl} alt="thumbnail"/>
                <h2>{post.username}</h2>
            </div>
            <div className="post">
                <img src={post.imageUrl} alt="image"/>
                <div className="icons">
                    <img src={heart} alt="heart"/>
                    <img src={heart} alt="heart"/>
                </div>
                <p className="likes"><span>{post.likes} likes</span></p>
            </div>
        </section>
    )
}
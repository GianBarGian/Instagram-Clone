import React from 'react';
import moment from 'moment';
import PT from 'prop-types';
import heart from "../../assets/heart.svg";
import CommentSection from '../CommentSection/CommentSection';
import AddComment from '../PostContainer/AddComment';

export default function Post({ post, postComment, changeComment, addComment, id }) {
    const dateFromNow = moment(post.timestamp, "MMM-Do-YYYY-hh-mm-ss-A").fromNow();

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
            <p className="timestamp">{dateFromNow}</p>
            <AddComment id={id} addComment={addComment} postComment={postComment} changeComment={changeComment} />
        </div>
    )
}


Post.propTypes = {
    post: PT.shape({
        username: PT.string.isRequired,
        thumbnailUrl: PT.string.isRequired,
        imageUrl: PT.string.isRequired,
        likes: PT.number.isRequired,
        timestamp: PT.string.isRequired,
        comments: PT.array.isRequired,
    })
}
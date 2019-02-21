import React from 'react';
import moment from 'moment';
import PT from 'prop-types';
import styled from 'styled-components';
import heart from "../../assets/heart.svg";
import CommentSection from '../CommentSection/CommentSection';
import AddComment from '../PostContainer/AddComment';

const PostStyled = styled.div`
    border: 1px solid lightgray;
    margin-top: 20px;
`;

const UserStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;

    img {
        height: 30px;
        padding: 0 1%;
        border-radius: 50%;
    }

    h2 {
        font-size: 0.9rem;
    }
`;


const PostContentStyled = styled.div`
    img{
        width: 100%;
        height: auto;
    }
`;

const PostIconsStyled = styled.div`
    img {
        padding: 3px 1%;
        height: 25px;
        display: inline-block;
        width: 5%;
    }
`;

const ParagraphStyled = styled.p`
    color: rgb(185, 180, 180);
    font-size: 0.7rem;
`;

export default function Post({ post, postComment, changeComment, addComment, idx, updateLikes }) {
    
    const dateFromNow = moment(post.timestamp, "MMM-Do-YYYY-hh-mm-ss-A").fromNow();

    return (
        <PostStyled>
            <UserStyled>
                <img src={post.thumbnailUrl} alt="thumbnail" />
                <h2>{post.username}</h2>
            </UserStyled>
            <PostContentStyled>
                <img src={post.imageUrl} alt="image" />
                <PostIconsStyled>
                    <img onClick={() => updateLikes(idx)} src={heart} alt="heart" />
                    <img src={heart} alt="heart" />
                </PostIconsStyled>
                <p className="likes"><span>{post.likes} likes</span></p>
            </PostContentStyled>
            <CommentSection comments={post.comments} />
            <ParagraphStyled className="timestamp">{dateFromNow}</ParagraphStyled>
            <AddComment 
                idx={idx} 
                addComment={addComment} 
                postComment={postComment} 
                changeComment={changeComment} 
            />
        </PostStyled>
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
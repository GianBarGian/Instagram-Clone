import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import Post from './Post';

const PostContainerStyled = styled.section`
    width: 500px;
    margin: 0 auto;
`;

export default function PostContainer({ data, postComment, changeComment, addComment, updateLikes }) {
    return (
        <PostContainerStyled>
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
        </PostContainerStyled>
    )
}

PostContainer.propTypes = {
    data: PT.arrayOf(PT.object).isRequired
}
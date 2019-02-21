import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

export default function PostsPage({ 
    searchValue, 
    searchPost, 
    changeSearch, 
    postComment, 
    changeComment, 
    data, 
    addComment, 
    updateLikes
}){
    return (
        <div className="container">
        <SearchBar 
            searchValue={searchValue} 
            searchPost={searchPost} 
            changeSearch={changeSearch}
        />
        <PostContainer 
          postComment={postComment} 
          changeComment={changeComment} 
          data={data} 
          addComment={addComment}
          updateLikes={updateLikes}
        />
      </div>
    )
}
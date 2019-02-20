import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      addComment: {
        username: "",
        text: "",
      },
      searchValue: "",
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  changeComment = (event) => {
    this.setState({
      addComment: {
        username: '',
        text: event.target.value
      }
    })
  }
  
  changeSearch = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  searchPost = username => {
    const searchArray = this.state.data.filter(post => post.username === username);

    this.setState({
      data: searchArray
    })
  }

  postComment = (comment, idx) => {
    const newComment = { username: 'Giacomo', text: ""};
    newComment.text = comment.text; 
    const commentsArr = this.state.data.map(post => post.comments.slice());
    commentsArr[idx].push(newComment);
    const newData = this.state.data;
    newData.map((post, idx) => post.comments = commentsArr[idx]);

    this.setState({
      data: newData
    })

  }

  updateLikes = idx => {
    const likes = []
    this.state.data.map(post => likes.push(post.likes));
    likes[idx]++;
    const newData = this.state.data;
    newData.map((post, idx) => post.likes = likes[idx]);

    this.setState({
      data: newData
    })
  }
  
  
  render() {
    return (
      <PostsPage
        searchValue={this.state.searchValue} 
        searchPost={this.searchPost} 
        changeSearch={this.changeSearch} 
        postComment={this.postComment} 
        changeComment={this.changeComment} 
        data={this.state.data} 
        addComment={this.state.addComment}
        updateLikes={this.updateLikes}
      />
    );
  }
}

export default App;

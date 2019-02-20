import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      addComment: [{
        username: "",
        text: "",
      }],
      searchValue: "",
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  handleChange = (idx, evt) => {
    const cloneAddComment = this.state.addComment;
    for (let i = idx; i > 0; i-- )  {
      cloneAddComment.push({username: "", text: ""})
    }
    cloneAddComment.splice(idx + 1);
    const newAddComment = cloneAddComment.map((comment, commentIdx) => {
      if (idx !== commentIdx) return comment;
      return { ...comment, text: evt.target.value };
    });
    this.setState({ addComment: newAddComment });
  };


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
    const newComment = { username: localStorage.getItem('username'), text: ""};
    newComment.text = comment[idx].text; 
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
        changeComment={this.handleChange} 
        data={this.state.data} 
        addComment={this.state.addComment}
        updateLikes={this.updateLikes}
      />
    );
  }
}

export default App;

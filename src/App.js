import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      addComment: {
        username: "",
        text: "",
      }
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  changeComment = event => {
    this.setState({
      addComment: {
        username: 'Giacomo',
        text: event.target.value
      }
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
  
  
  render() {
    return (
      <div  className="container">
        <SearchBar />
        <PostContainer 
          postComment={this.postComment} 
          changeComment={this.changeComment} 
          data={this.state.data} 
          addComment={this.state.addComment}
        />
      </div>
    );
  }
}

export default App;

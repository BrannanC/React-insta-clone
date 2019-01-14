import React, { Component } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

import './components/SearchBar/SearchBar.css';
import './components/PostContainer/PostContainer.css';
import './components/CommentSection/CommentSection.css';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pageData: dummyData,
      inputText: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addComment = (e, postData) => {
    e.preventDefault();
    let newData = this.state.pageData.slice();
    const newComment = {username: 'New Name', text: this.state.inputText}
    newData.forEach(x => {
      if (x.username === postData.username && x.timestamp === postData.timestamp){
        x.comments.push(newComment);
      }
    })
    this.setState({
      pageData: newData,
      inputText: ''
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.pageData.map(x => <PostContainer 
          postData={x} 
          key={`${x.username}${x.timestamp}` }
          handleChange={this.handleChange}
          addComment={this.addComment}
          inputText={this.state.inputText}
        />)}
      </div>
    );
  }
}

export default App;

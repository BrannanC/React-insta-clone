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
      pageData: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.pageData.map(x => <PostContainer postData={x} key={`${x.username}${x.timestamp}` }/>)}
      </div>
    );
  }
}

export default App;

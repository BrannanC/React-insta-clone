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
      pageData: [],
      filteredPosts: []
    }
  }

  componentDidMount(){
    this.setState({
      pageData: dummyData
    })
  }

  handleSearch = (e) => {
    const posts = this.state.pageData.filter(x => {
      if(x.username.includes(e.target.value)){
        return x
      }
    })
    this.setState({
      filteredPosts: posts
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar handleSearch={this.handleSearch} />
        <PostContainer 
          pageData={this.state.filteredPosts.length > 0
          ? this.state.filteredPosts
          : this.state.pageData
        } 
        />
      </div>
    );
  }
}

export default App;

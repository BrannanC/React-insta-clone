import React, { Component } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

import '../../App.css';



class PostPage extends Component {
  constructor(){
    super();
    this.state = {
      pageData: [],
      filteredPosts: [],
      username: ''
    }
  }

  componentDidMount(){
    this.setState({
      pageData: dummyData,
      username: window.localStorage.getItem('username')
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

  handleLogout = () => {
      window.localStorage.setItem('username', '');
      window.location.reload();
  }

  render() {
    return (
      <div className="PostPage">
        <SearchBar handleSearch={this.handleSearch} 
        handleLogout={this.handleLogout}
        />
        <PostContainer
        username={this.state.username} 
          pageData={this.state.filteredPosts.length > 0
          ? this.state.filteredPosts
          : this.state.pageData
        } 
        />
      </div>
    );
  }
}

export default PostPage;
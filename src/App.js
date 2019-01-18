import React, { Component } from 'react';

import PostPage from './components/PostContainer/PostPage';
import LoginPage from './components/Login/LoginPage';
import authenticate from './components/authenication/authenticate';

class App extends Component {
  constructor(){
    super();
    this.state ={

    }
}

componentDidMount(){
  window.localStorage.setItem('username', '')
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleLogin = () => {
    window.localStorage.setItem('username', this.state.username);
}

  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    );
  }
}

export default authenticate(App)(LoginPage);

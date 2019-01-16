import React from 'react';
import LoginPage from '../Login/LoginPage';

const authenticate = App => LoginPage =>
  class extends React.Component {
    constructor(){
      super();
      this.state = {
        loggedIn: false
      }
    }

    componentDidMount(){
      this.setState({loggedIn: window.localStorage.getItem('username') ? true : false});
    }

    render() {
      return this.state.loggedIn ? <App /> : <LoginPage />;
    }
  };

  export default authenticate;
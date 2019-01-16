import React from 'react';

class LoginPage extends React.Component {
    constructor(){
        super();
        this.state ={
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = () => {
        window.localStorage.setItem('username', this.state.username);
        window.location.reload();
    }

    render(){
        return (
            <div className="Login">
            <form onSubmit={this.handleLogin} >
                <input type="text" 
                placeholder="username" 
                name="username" 
                value={this.state.username} 
                onChange={this.handleChange} 
            />
                <input 
                type="password" 
                placeholder="password" 
                name="password" 
                value={this.state.password} 
                onChange={this.handleChange}
            />
                <button type="submit">Login</button>
            </form>
            </div>
        );
    }
}

export default LoginPage;
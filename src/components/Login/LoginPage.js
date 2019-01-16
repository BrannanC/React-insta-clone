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
            <div className="LoginPage">
            <img src="https://cdn.pixabay.com/photo/2013/07/13/12/46/iphone-160307_1280.png" />
                <div className="LoginForm">
                    <h1 className="instagram">Instagram</h1>
                    <h3>Sign up to feel real bad about yourself and waste some time</h3>
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
            </div>
        );
    }
}

export default LoginPage;
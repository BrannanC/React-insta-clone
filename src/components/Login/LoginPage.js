import React from 'react';
import styled from 'styled-components';

const LoginPageDiv = styled.div`
    margin: 40px auto;
    max-width: 800px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    max-height: 70vh;
`;

const LoginImg = styled.img`
    width: 50%;
    height: auto;
    padding: 0 40px;
`;

const LoginRightSide = styled.div`
    width: 50%;
    border: 1px solid grey;
`;

const InstaFont = styled.h1`
    font-size: 4rem;
    font-family: 'Sacramento', cursive;
`;

const StyledH3 = styled.h3`
    font-weight: 300;
`;

const LogForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormInput = styled.input`
    width: 50%;
    font-size: 2rem;
    margin: 15px;
`;

const FormButton = styled.button`
    width: 50%;
    font-size: 2rem;
    margin: 15px;
`;

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
            <LoginPageDiv>
                <LoginImg src="https://i.imgur.com/i9VFRdx.png" />
                <LoginRightSide>
                    <InstaFont>Instagram</InstaFont>
                    <StyledH3>Sign up to feel real bad about yourself and waste some time</StyledH3>
                    <LogForm onSubmit={this.handleLogin} >
                        <FormInput type="text" 
                        placeholder="username" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleChange} 
                    />
                        <FormInput 
                        type="password" 
                        placeholder="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                    />
                        <FormButton type="submit">Login</FormButton>
                    </LogForm>
                </LoginRightSide>
            </LoginPageDiv>
        );
    }
}

export default LoginPage;
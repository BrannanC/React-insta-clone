import React from 'react';
import styled from 'styled-components';

const SearchBarStyle = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Sacramento', cursive;
    @media (max-width: 955px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const SearchBarLeft = styled.div`
        margin: 10px;
        font-size: 2rem;
`;

const SearchBarInput = styled.input`
    margin: 10px;
    font-size: 2rem;
`;

const IconsDiv = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
`;

const Icon = styled.i`
    margin: 10px;
`;

const LogoutButton = styled.button`
    font-size: 1rem;
    padding: 5px;
    border-radius: 3px;
    background: palevioletred;
    color: white;
    border: 2px solid black;
`;

const SearchBar = (props) => {
    return (
        <SearchBarStyle className="SearchBar">
            <SearchBarLeft><i className="fab fa-instagram"></i> <span>|</span> Instagram</SearchBarLeft>
            <SearchBarInput type="text" placeholder="Search" onChange={props.handleSearch} />
            <IconsDiv>
                <Icon className="fas fa-2x fa-asterisk"></Icon>
                <Icon className="far fa-2x fa-heart"></Icon>
                <Icon className="fas fa-2x fa-user-alt"></Icon>
                <LogoutButton onClick={props.handleLogout}>Logout</LogoutButton>
            </IconsDiv>
        </SearchBarStyle>
    );
}

export default SearchBar;
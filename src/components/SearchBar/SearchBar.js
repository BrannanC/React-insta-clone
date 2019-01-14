import React from 'react';

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <div className="search-bar-left"><i className="fab fa-instagram"></i> <span>|</span> Instagram
            </div>
            <input className="search-bar-input" type="text" placeholder="Search" />
            <div className="icons">
                <i className="fas fa-2x fa-asterisk"></i>
                <i className="far fa-2x fa-heart"></i>
                <i className="fas fa-2x fa-user-alt"></i>
            </div>
        </div>
    );
}

export default SearchBar;
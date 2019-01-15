import React from 'react';

const SearchBar = (props) => {
    return (
        <div className='search-bar-content'>
            <div className='search-bar-left'>
                <img className="camera" alt="camera" src={require('../../img/camera.svg')}/>
                <img className="instagram-logo" alt="instagram logo" src={require('../../img/instagram.jpg')}/>
            </div>
            <div>
                <input className='search-bar-field' type='text' placeholder="Search" onChange={props.handleSearch}></input>
            </div>
            <div className="search-bar-right">
                <img className="icon" alt="external" src={require('../../img/corner-pointy.png')}/>
                <img className="icon" alt="heart" src={require('../../img/corner-heart.png')}/>
                <img className="icon" alt="profile" src={require('../../img/corner-dude.png')}/>
            </div>
        </div>
    )
}

export default SearchBar;
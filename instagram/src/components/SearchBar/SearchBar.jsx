import React from 'react';

const SearchBar = () => {
    return (
        <div className='search-bar-content'>
            <div className='search-bar-left'>
                <img className="camera" alt="camera" src={require('../../img/camera.svg')}/>
                <img className="instagram-logo" alt="instagram logo" src={require('../../img/instagram.jpg')}/>
            </div>
        </div>
    )
}

export default SearchBar;
import React from 'react';
import styled from 'styled-components';
import magnifyingGlass from '../../img/search.svg';

 const SearchBarContent = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    height: 61px;
    width: 100%;
    max-width: 1000px;
    padding-top: 15px;
    position: relative;
    align-items: center;
    @media (max-width: 550px) {
        
    }
  `;
  
  const SearchBarLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;
  
  const Camera = styled.img`
    border-right: 1px solid gray;
    margin: 0 10px 0 0;
    padding: 0 10px;
    height: 27px;
    width: 50px;
    cursor: pointer;
  `;
  
  const InstagramLogo = styled.img`
    margin: 7px 0 0 2%;
    width: 100px;
    cursor: pointer;
  `;
  
  const SearchBarField = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.searching ? `#f9f9f9;` : `#f9f9f9 url(${magnifyingGlass}) no-repeat scroll 1px 1px;`}
    background-size: 7%;
    background-position: 64px 4px;
    text-align: center;
    border-radius: 3px;
    border: 2px solid rgb(216, 216, 216);
    width: 220px;
    @media (max-width:550px) {
        display: none;
    }
  `;
  
  const SearchBarRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 150px;
    justify-content: space-between;
  `;
  
  const Icon = styled.img`
    width: 28px;
    height: 30px;
    cursor: pointer;
  `;

const SearchBar = (props) => {
    return (
        <SearchBarContent>
            <SearchBarLeft>
                <Camera alt="camera" src={require('../../img/camera.svg')}/>
                <InstagramLogo alt="instagram logo" src={require('../../img/instagram.jpg')}/>
            </SearchBarLeft>
            <div>
                <SearchBarField type='text' placeholder="Search" searching={props.searching} onChange={props.handleSearch}/>
            </div>
            <SearchBarRight>
                <Icon alt="external" src={require('../../img/corner-pointy.png')}/>
                <Icon alt="heart" src={require('../../img/corner-heart.png')}/>
                <Icon alt="profile" src={require('../../img/corner-dude.png')}/>
            </SearchBarRight>
        </SearchBarContent>
    )
}

export default SearchBar;
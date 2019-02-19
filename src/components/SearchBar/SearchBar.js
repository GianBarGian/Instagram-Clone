import React from 'react';
import './SearchBar.css';
import camera from "../../assets/camera.svg";
import logo from "../../assets/instagramLogo.png";
import heart from "../../assets/heart.svg";

export default function SearchBar({ searchValue, searchPost, changeSearch }) {
    return (
        <header>
            <div className="left">
            <a href=""><img className="camera-logo" src={camera} alt="camera"/></a>
            <a href=""><img className="instagram-logo" src={logo} alt="logo"/></a>
            </div>
            <div className="center">
            <input type="text" placeholder="search" onChange={changeSearch} onKeyDown={event => {
                if (event.keyCode === 13) {
                    searchPost(searchValue);
                }
            }}/>
            </div>
            <div className="right">
            <a href=""><img className="heart" src={heart} alt="heart"/></a>
            <a href=""><img className="heart" src={heart} alt="heart"/></a>
            <a href=""><img className="heart" src={heart} alt="heart"/></a>
            </div>
        </header>
    )
}
import React from 'react';
import styled from 'styled-components';
import camera from "../../assets/camera.svg";
import logo from "../../assets/instagramLogo.png";
import heart from "../../assets/heart.svg";

const HeaderStyled = styled.header`
    header {
        height: 35px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid lightgrey;
        padding: 20px 5%;
        align-items: center;

        img {
        height: 30px;
        padding: 0 7px;
        }

        input {
            padding: 0 10px;
            border-radius: 3px;
            border: 1px solid lightgray;
            text-align: center;
        }
    }   
`;

const LogosStyled = styled.div`
    .camera-logo {
        border-right: 1px solid lightgray;
    }
`;

const NavStyled = styled.nav`
    nav a {
        padding: 0 10px;
    }
`;

export default function SearchBar({ searchValue, searchPost, changeSearch }) {
    return (

        <HeaderStyled>
            <header>
                <LogosStyled>
                    <div>
                    <a href="http://localhost:3000/"><img className="camera-logo" src={camera} alt="camera"/></a>
                    <a href="http://localhost:3000/"><img className="instagram-logo" src={logo} alt="logo"/></a>
                    </div>
                </LogosStyled>
                <input type="text" placeholder="search" onChange={changeSearch} onKeyDown={event => {
                    if (event.keyCode === 13) {
                        searchPost(searchValue);
                    }
                }}/>
                <NavStyled>
                    <nav>
                    <a href="http://localhost:3000/"><img className="heart" src={heart} alt="heart"/></a>
                    <a href="http://localhost:3000/"><img className="heart" src={heart} alt="heart"/></a>
                    <a href="http://localhost:3000/"><img className="heart" src={heart} alt="heart"/></a>
                    </nav>
                </NavStyled>
            </header>
        </HeaderStyled>
    )
}
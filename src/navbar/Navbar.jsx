import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Navbar({children}) {
    const [extendNav, setExtendNav] = useState(false)
  return (
    <div>
    <NavbarContainer>
        <NavbarLink to="/">    
            <LogoDiv>
                <img src="/logo192.png" alt="React Logo" />
                <h1>React</h1>
            </LogoDiv>
        </NavbarLink>
        <LinkDiv>
            <ul>
                <NavbarLink to="/docs"><li>Docs</li></NavbarLink>
                <NavbarLink to="/tutorial"><li>Tutorial</li></NavbarLink>
                <NavbarLink to="/blog"><li>Blog</li></NavbarLink>
                <NavbarLink to="/community"><li>Community</li></NavbarLink>
                <NavbarLink to="/github"><li>GitHub</li></NavbarLink>
            </ul>
        </LinkDiv>
        <OpenLinksButton onClick={() => {setExtendNav((curr) => !curr)}}> {extendNav ? <>&#10005;</> : <>&#8801;</>} </OpenLinksButton>
    </NavbarContainer>
    {
        extendNav ? (
            <NavbarExtendedContainer>
                <ul>
                    <NavbarLink to="/docs"><li>Docs</li></NavbarLink>
                    <NavbarLink to="/tutorial"><li>Tutorial</li></NavbarLink>
                    <NavbarLink to="/blog"><li>Blog</li></NavbarLink>
                    <NavbarLink to="/community"><li>Community</li></NavbarLink>
                    <NavbarLink to="/github"><li>GitHub</li></NavbarLink>
                </ul>
            </NavbarExtendedContainer>
        ) : null
    }
    </div>
  )
}

const NavbarContainer = styled.nav`
    width: 100vw;
    height: 80px;
    background-color: #20232A;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoDiv = styled.div`
    margin-left: 20px;
    display: flex;
    align-items: center;
    img {
        width: 50px;
        width: 50px;
        margin-right: 10px;
        &:hover {
            cursor: pointer;
        }
    }
    h1 {
        color: #61DAF9;
        &:hover {
            cursor: pointer;
            transition: 0.2s ease-out
        }
    }
`

const LinkDiv = styled.div`
    margin-right: 20px;
    font-size: 19px;
    ul {
        display: flex;
        align-items: center;
        text-decoration: none;
        list-style-type: none;
    }
    li {
        margin: 20px;
        &:hover {
            cursor: pointer;
            color: #61DAF9;
            transition: 0.2s ease-in;
        }
    }
    @media (max-width: 700px) {
        display: none;
    }
`

const NavbarLink = styled(Link)`
    color: white;
    text-decoration: none;
`

const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;
    transition: 1s ease-out;
    @media (min-width: 700px) {
        display: none
    }
`

const NavbarExtendedContainer = styled.div`
    color: white;
    background: #20232A;
    height: 100vh;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    right: 0;
    ul {
        text-align: center;
        text-decoration: none;
        list-style-type: none;
    }
    li {
        margin: 50px;
        font-size: 40px;
    }
`
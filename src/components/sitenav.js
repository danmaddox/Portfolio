import React from 'react';
import styled from 'styled-components'
import Logo from "../components/logo"
import { Link } from "gatsby";

const Navbar = styled.nav`
    background-color: rgba(35, 35, 42, 0.8);
    position: absolute;
    top: 0px;
    width: 100vw;
    height: 3.5rem;
    position: absolute;
    box-shadow: 0px 4px 4px 0px #111;    
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
`

const NavLink = styled(Link)`
    padding: 0;
    text-align: center;
    color: white;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 95%;
    transition: all 280ms linear;
    &:hover {
        background: white;
        color: rgba(71,85,94,1);
        transform: scale(1.1);
        border-radius: 5px;
    }
    &:last-child{
        margin-right: 125px;
    }
`

const SiteNav = () => {

return(

<Navbar>
<NavLink to='/'><Logo></Logo></NavLink>
<NavLink to='/portfolio' activeStyle={{ color: "rgba(71,85,94,1)" }} activeClassName="selected">Portfolio</NavLink>
<NavLink to='/blog' activeStyle={{ color: "rgba(71,85,94,1)" }} activeClassName="selected">Blog</NavLink>
<NavLink to='/contact' activeStyle={{ color: "rgba(71,85,94,1)" }} activeClassName="selected">Contact</NavLink>
</Navbar>
)
}

export default SiteNav
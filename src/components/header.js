import React from "react";
/* IMG */
import logo from './img/logoNike.svg';
/* CSS */
import '../css/header.css';

const Header = () => {
    const searchBar = () => {
        return(
            alert('Criar um input para o search')
        )
    }
    
    const notification = () => {
        return(
            alert('Criar uma div para amostrar as notificação')
        )
    }
    return (
        <header id="navbar">
            <div className="navbar__container">
                <ul>
                    <li id="#searchBar">
                        <a href="#search" onClick={searchBar}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#home" className="home">
                            <img src={logo} width="75%"/>
                        </a>
                    </li>
                    <li>
                        <a href="#notification" className="notification" onClick={notification}>
                            <i className="fa-solid fa-bell"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
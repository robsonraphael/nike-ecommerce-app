import React from "react";
/* CSS */
import '../css/menu.css';

const Menu = () => {
    return (
        <nav>
            <div className="menu__container">
                <ul>
                    <li>
                        <a href="#home">
                            <i className="fa-solid fa-house"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#config">
                            <i className="fa-solid fa-gear"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#profile">
                            <i className="fa-solid fa-user"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu;
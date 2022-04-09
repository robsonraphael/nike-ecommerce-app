import React from "react";
/* IMG */
import banner from './img/banner.svg';
import sneaker1 from './img/sneaker1.svg';
import sneaker2 from './img/sneaker2.svg';
import sneaker3 from './img/sneaker3.svg';
import heart from './img/heart.svg';
/* CSS */
import '../css/main.css';

const Main = () => {
    return (
        <main>
            <section className="section__category">
                <ul>
                    <li>
                        <button>Boots</button>
                    </li>
                    <li>
                        <button>Sneakers</button>
                    </li>
                    <li>
                        <button>Jordan</button>
                    </li>
                    <li>
                        <button>Air Force</button>
                    </li>
                </ul>
            </section>
            <section className="section__banner">
                <div>
                    <h1>DON'T TRY<br/><strong>JUST DO IT.</strong></h1>
                    <button>Order Now</button>
                    <img src={banner} alt="Banner"/>
                </div>
            </section>
            <section className="section__sneakers">
                <div>
                    <div className="label">
                        <h2>Top Sneakers</h2>
                        <a href="#viewAll">View All</a>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card__top">
                                <h3>R$ 999,99</h3>
                                <img src={heart} alt="heart"/>
                            </div>
                            <img src={sneaker1} alt="sneaker1"/>
                            <p>Nike Air Max Plus</p>
                        </div>
                        <div className="card-body">
                            <div className="card__top">
                                <h3>R$ 999,99</h3>
                                <img src={heart} alt="heart"/>
                            </div>
                            <img src={sneaker2} alt="sneaker2"/>
                            <p>Nike Air Max Plus</p>
                        </div>
                        <div className="card-body">
                            <div className="card__top">
                                <h3>R$ 999,99</h3>
                                <img src={heart} alt="heart"/>
                            </div>
                            <img src={sneaker3} alt="sneaker3"/>
                            <p>Nike Air Max Plus</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;
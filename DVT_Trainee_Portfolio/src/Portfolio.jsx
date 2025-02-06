import './styles.css';
import './Portfolio.css';
import Header from './components/Header';

import React from 'react';

function Portfolio() {
    return (
        <>
            <Header />
            <section className="Intro">
                <p className="theTitle">Portfolio</p>
                <div className="search">
                    <i class="bi bi-search"></i>
                    <input type="text" id="searchInput" placeholder="  Search" />
                </div>
            </section>
            <section className="cards">
                <div className="carousel">
                    <button className="carousel-navigation prev">&#10094;</button>
                    <div className="carousel-inner-full">
                        <div className="carousel-item-top">
                            <img src="images/1.jpg" alt="Image 1" />
                            <div className="carousel-caption">
                                <p>Name <br/>
                                    <span>Surname
                                    Personality trait
                                    </span>
                                </p>
                            </div>
                        </div>
                        <p id="project-Title">My Projects</p>
                        <div className="carousel-item-middle">
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                        </div>
                        <div className="carousel-item-bottom">
                            <a href="#"><i className="bi bi-github"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                            <a href="#"><i className="bi bi-envelope-fill"></i></a>
                            <a href="#"><i className="bi bi-telephone"></i></a>
                        </div>
                    </div>
                    <button className="carousel-navigation next">&#10095;</button>
                </div>
            </section>
        </>
    );
}

export default Portfolio;
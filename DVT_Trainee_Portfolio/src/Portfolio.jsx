import './styles.css';
import './Portfolio.css';
import Header from './components/Header';
import { Link } from 'react-router-dom';
import UserProfile from './UserPortfolio';
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
                    
                    <button className="carousel-navigation next">&#10095;</button>
                </div>
            </section>
        </>
    );
}

export default Portfolio;
import "./styles.css";
import "./Portfolio.css";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import UserProfile from "./UserPortfolio";
import React from "react";

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

                <div className="view-filter">
                    <select name="view-mode" id="view-mode" className="custom-dropdown">
                        <option value="card-view">Card</option>
                        <option value="grid-view">Grid</option>
                        <option value="carousel-view">Carousel</option>
                    </select>
                </div>

            </section>
            <section className="cards">
                <div className="carousel">
                    <button className="carousel-navigation prev">&#10094;</button>
                    <div className="portfolio-card">
                        <button className="mail"></button>
                        <div className="profile-pic"></div>
                        <div className="bottom">
                            <div className="content">
                                <span className="name">My Name</span>
                                <span className="about-me">
                                    Description
                                </span>
                                <span className="about-me">
                                    Tech Stack
                                </span>
                            </div>
                            <div className="bottom-bottom">
                                <div className="social-links-container"></div>
                                <button className="button">Contact Me</button>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-navigation next">&#10095;</button>
                </div>                
            </section>
        </>
    );
}

export default Portfolio;

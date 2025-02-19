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
                    <div class="portfolio-card">
                        <button class="mail"></button>
                        <div class="profile-pic"></div>
                        <div class="bottom">
                            <div class="content">
                                <span class="name">My Name</span>
                                <span class="about-me">
                                    Lorem ipsum dolor sit amet consectetur adipisicinFcls
                                </span>
                            </div>
                            <div class="bottom-bottom">
                                <div class="social-links-container"></div>
                                <button class="button">Contact Me</button>
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

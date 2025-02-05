import React, {useState, useEffect} from 'react';
import './styles.css';
import './About.css';
import Header from './components/Header';
import Card from './components/Card';
import placeHolder from "./assets/placeholder.png";

function About(){
    return(
        <>
            <Header/>

            <section className='team-pictures'>

                <h1>The  <span className='yellow-text'>Team</span></h1>

                <img src={placeHolder} alt="Team Picture" className='big-picture'/>

                <h2>Meet The Team</h2>

                <div className='meet-the-team'>
                    <img src={placeHolder} alt="Team Picture" className='small-picture'/>
                    <div className='team-members'>
                        <p>Njabulo</p>
                        <p>Phemelo</p>
                        <p>Gomo</p>
                        <p>Paballo</p>
                        <p>Sli</p>
                        <p>Adrian</p>

                        <h3><span className='yellow-text'>Team</span> Picture 1</h3>
                    </div>
                   
                </div>

                <div className='meet-the-team'>
                    <img src={placeHolder} alt="Team Picture" className='small-picture'/>
                    <div className='team-members'>
                        <p>Andile</p>
                        <p>Thabane</p>
                        <p>Remo</p>
                        <p>Tiffany</p>
                        <p>Tshenolo</p>
                        <p>Dylan</p>

                        <h3><span className='yellow-text'>Team</span> Picture 2</h3>
                    </div>
                   
                </div>

            </section>

            <section className='team-info'>
                <div className='team-info-text'>
                    <h1> About  <span className='yellow-text'> Us </span></h1>
                    <p> Meet our dynamic team, a blend of unique personalities and shared dedication. Our group includes loud and energetic voices like Sli and Remow, adding vibrancy to our discussions. We have the comedians—Phemelo, Njabulo, Gomo, Dylan, and Adrian—always keeping the atmosphere light and entertaining. </p>
                    <p> <span className='yellow-text'> Balancing this, the quiet and thoughtful Thabane, Mimi, and Andile bring calm and reflection to the team. Everyone here is hardworking, pushing boundaries to achieve excellence. </span></p>
                    <p> Our friendly and bubbly spirits, Pabs, Mimi, and Tiff, keep morale high, while the sharp intellect of Thabane, Njabulo, and Andile inspires us all. Phemelo, Tiff, Gomo, Njabulo, and Andile are the pillars of responsibility, ensuring we stay on track, though Sli's occasional lateness reminds us we're human! Punctual stars like Gomo and Mimi lead by example. </p>
                    <p> <span className='yellow-text'> Our style icons—Phemelo, Gomo, Njabulo, Tiff, and Pabs—bring flair, while caffeine enthusiasts Njabulo, Sli, Adrian, and Thabane keep the team fueled. Together, we're a chilled and driven group, turning collaboration into success.</span></p>
                </div>

            </section>

            <section>
                <div className='about-us'>
                    <h1>The Team Through our <br /> Manager's Eyes</h1>
                </div>
                
            </section>

        </>
    );
}

export default About; 
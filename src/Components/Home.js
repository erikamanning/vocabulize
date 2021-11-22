import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './Deck/Card/Card.css';
import HomeExplanation from './Home/HomeExplanation';
import HomeAbout from "./Home/HomeAbout";

const Home = () => {
    return(
        <div style={{marginTop:'20%', }}>
            <div className='Card'>               
                <div>
                    <h1 className='card-word home-card'>Welcome to Vocabulize</h1>
                    <p className='definition home-card'>The best place to study for visual learners</p>
                </div>
            
            </div>
            <HomeExplanation />
            <HomeAbout />
            <Link className='get-started' to="/deck">Get Started</Link>
        </div>
    )
}

export default Home;
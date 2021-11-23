import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './Deck/Card/Card.css';
import HomeExplanation from './Home/HomeExplanation';
import HomeAbout from "./Home/HomeAbout";

const Home = () => {
    return(
        <div style={{marginTop:'5%', }}>              
                <div className='home-top'>
                    <motion.div 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1, delay:1}}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 1, delay:0 },
                        }}
                        style={{margin:'0 auto 0 auto', cursor:'pointer'}}>
                        <h1 style={{color:'var(--text-color'}}>Learn faster.</h1>
                        <p style={{color:'var(--text-accent'}}>Scroll to learn more</p>
                    </motion.div>
            </div>
            <HomeExplanation />
            <HomeAbout />
        </div>
    )
}

export default Home;
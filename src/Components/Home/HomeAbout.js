import React from "react";
import { motion } from "framer-motion";
import './Home.css';

const HomeAbout= ()=>{
    return(
        <motion.div className='home-about-container'>
            <div className='home-about'>
                <h1>Humans are Visual Learners.</h1>
                <p>So lets learn, <b><i>visually</i></b>.</p>
            </div>
        </motion.div>
    );
}

export default HomeAbout;
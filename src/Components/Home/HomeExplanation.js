import React from "react";
import { motion } from "framer-motion";
import '../Tranisitions/Object-in.css';
import '../Tranisitions/Object-in';
import '../Deck/Card/Card.css';

const HomeExplanation = () => {
    return(
        <div className='js-scroll fade-in-bottom'>
            <div className='Card'>               
                <div>
                    <h1 className='card-word home-card'>Start with a word</h1>
                    <p className='definition home-card'>The best place to study for visual learners</p>
                </div>
                <button className={'flip-card'}>Get Started</button>
            </div>
            <div className='Card'>               
                <div>
                    <h1 className='card-word home-card'>Start with a word</h1>
                    <p className='definition home-card'>The best place to study for visual learners</p>
                </div>
                <button className={'flip-card'}>Get Started</button>
            </div>
            
        </div>
    )
}

export default HomeExplanation;
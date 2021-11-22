import React from "react";
import { motion } from "framer-motion";
import '../Tranisitions/Object-in.css';
import '../Tranisitions/Object-in';
import '../Deck/Card/Card.css';
import './HomeExplanation.css'

const HomeExplanation = () => {
    return(
        <motion.div
        animate={{opacity:0}}
        transition={{delay:1}}
        className='home-explanatation-container'>
            <div className='Card'>               
                <div>
                    <h1 className='card-word home-card'>Start a Deck</h1>
                    <p className='definition home-card'></p>
                </div>
            </div>
            <div className='Card'>               
                <div>
                    <h1 className='card-word home-card'>Flip the Card</h1>
                    <p className='definition home-card'>Make a drawing using the canvas to help you remember the word</p>
                </div>
            </div>
            <div className='Card'>               
                <div>
                    <h1 className='card-word home-card'>Vocabulize!</h1>
                    <p className='definition home-card'>Use your drawing to aid you in memorizing</p>
                </div>
            </div>
        </motion.div>
    )
}

export default HomeExplanation;
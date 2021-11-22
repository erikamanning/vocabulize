import React from "react";
import { motion } from "framer-motion";
import '../Tranisitions/Object-in.css';
import '../Tranisitions/Object-in';
import '../Deck/Card/Card.css';
import './HomeExplanation.css'
import InView from "react-intersection-observer";
const HomeExplanation = () => {
    return(
        <InView threshold={0.25}>
            {({ref, inView}) =>
                <motion.div
                ref={ref}
                initial={{opacity:0, y:10}}
                animate={ inView ? {opacity:1} : {opacity:0}}
                transition={{duration:.8}}
                className='home-explanatation-container'>
                    <motion.div className='Card'>               
                        <div>
                            <h1 className='card-word home-card'>Start a Deck</h1>
                            <p className='definition home-card'></p>
                        </div>
                    </motion.div>
                    <motion.div className='Card'>               
                        <div>
                            <h1 className='card-word home-card'>Flip the Card</h1>
                            <p className='definition home-card'>Make a drawing using the canvas to help you remember the word</p>
                        </div>
                    </motion.div>
                    <div className='Card'>               
                        <div>
                            <h1 className='card-word home-card'>Vocabulize!</h1>
                            <p className='definition home-card'>Use your drawing to aid you in memorizing</p>
                        </div>
                    </div>
                </motion.div>
            }
        </InView>
    )
}

export default HomeExplanation;
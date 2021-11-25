import React from "react";
import { motion } from "framer-motion";
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
                whileInView="visible"
                viewport={{ once: true }}
                animate={ inView ? {opacity:1} : {opacity:0}}
                transition={{duration:.8}}
                className='home-explanatation-container'>
                    <motion.div className='Card'>               
                        <div className='card-container'>
                            <h1 className='card-word home-card'>Start a Deck</h1>
                            <p className='definition home-card'>Click above to get a set of vocab cards to memorize.</p>
                        </div>
                    </motion.div>
                    <motion.div className='Card'>               
                        <div className='card-container'>
                            <h1 className='card-word home-card'>Flip the Card</h1>
                            <p className='definition home-card'>Make a drawing using the canvas on the back size of the cardto help you remember.</p>
                        </div>
                    </motion.div>
                    <div className='Card'>               
                        <div className='card-container'>
                            <h1 className='card-word home-card'>Vocabulize!</h1>
                            <p className='definition home-card'>Use your drawings to learn faster, and better.</p>
                        </div>
                    </div>
                </motion.div>
            }
        </InView>
    )
}

export default HomeExplanation;
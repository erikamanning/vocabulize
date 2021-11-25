import React, {useState} from "react";
import './Card.css';
import CardFront from './CardFront/CardFront';
import CardBack from './CardBack/CardBack';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const CardContext = React.createContext();

const Card = ({card}) => {

    const [cardSide, setCardSide] = useState('front');
    const arrowRightIcon = <FontAwesomeIcon icon={faArrowAltCircleRight} />;


    const flipCard = ()=>{
        if(cardSide === "front")
            setCardSide("back")
        else
            setCardSide("front")

    }

    return (

        <CardContext.Provider value={card}>
            <motion.div
                initial={{ opacity: 0, y:20}}
                animate={{ opacity: 1, y:0 }}
                transition={{duration:.5}}
                className='Card'>
                {
                    cardSide === "front"
                    ? <CardFront />
                    : <CardBack />
                }
                <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}
                    transition={{duration:.5, delay:.35}}>
                <button className={'flip-card'} onClick={flipCard}>
                        <span style={{'color':'#1894ef'}}>Flip &nbsp; {arrowRightIcon}</span>
                </button>
                </motion.div>
            </motion.div>
        </CardContext.Provider>

    )
}

export {CardContext};
export default Card;
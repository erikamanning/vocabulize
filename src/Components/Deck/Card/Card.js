import React, {useState} from "react";
import './Card.css';
import CardFront from './CardFront/CardFront';
import CardBack from './CardBack/CardBack';
import { motion } from "framer-motion";

const CardContext = React.createContext();

const Card = ({card}) => {

    const [cardSide, setCardSide] = useState('front');

    const flipCard = ()=>{
        if(cardSide === "front")
            setCardSide("back")
        else
            setCardSide("front")

    }

    return (

        <CardContext.Provider value={card}>
            <motion.div
                initial={{ opacity: 0, x:20}}
                animate={{ opacity: 1, x:0 }}
                transition={{duration:1, delay:.5}}
                className='Card'>
                {
                    cardSide === "front"
                    ? <CardFront />
                    : <CardBack />
                }
                <button className={'flip-card'} onClick={flipCard}>Flip Card</button>
            </motion.div>
        </CardContext.Provider>

    )
}

export {CardContext};
export default Card;
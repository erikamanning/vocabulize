import React, {useState} from "react";
import './Card.css';
import CardFront from './CardFront/CardFront';
import CardBack from './CardBack/CardBack';

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
            <div className='Card'>
                {
                    cardSide === "front"
                    ? <CardFront />
                    : <CardBack />
                }
                <button className={'flip-card'} onClick={flipCard}>Flip Card</button>
            </div>
        </CardContext.Provider>
    )
}

export {CardContext};
export default Card;
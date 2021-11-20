import React from "react"
import './Card.css'
import CardFront from './CardFront'

const CardContext = React.createContext();

const Card = ({card}) => {

    return (
        <CardContext.Provider value={card}>
            <div className='Card'>
                <h5 className='Card-title'>Card</h5>
                <CardFront />
            </div>
        </CardContext.Provider>
    )
}

export {CardContext};
export default Card;
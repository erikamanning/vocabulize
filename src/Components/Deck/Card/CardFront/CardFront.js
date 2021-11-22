import React, {useContext} from "react"
import { CardContext } from "../Card";


const CardFront = () => {

    const card = useContext(CardContext);

    return (

            <div>
                <p className='card-word'><b>Word:</b> {card.word}</p>
                <p className='definition'><b>Definition:</b> {card.definition}</p>
            </div>
    )

}

export default CardFront;
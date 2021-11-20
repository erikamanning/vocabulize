import React, {useContext} from "react"
import { CardContext } from "../Card";


const CardFront = () => {

    const card = useContext(CardContext);

    return (

            <div>
                <h1>CardFront</h1>
                <p><b>Word:</b> {card.word}</p>
                <p><b>Definition:</b> {card.definition}</p>
            </div>
    )

}

export default CardFront;
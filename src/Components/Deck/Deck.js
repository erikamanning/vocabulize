import React, {useContext} from "react"
import {DeckContext} from '../App'
const Deck = () => {

    const {deck} = useContext(DeckContext);

    deck.map(card=>console.log(card.word));

    return (
        <div>
            {
                deck.length ? 

                    <div>
                        <h1>This is your Deck</h1>
                        <ul>
                            {deck.map((card)=>{<li>{card.word}</li>})}
                        </ul>      
                    </div>
                    :
                    <h2>No deck yet</h2>      
            }

        </div>
    )
}

export default Deck;
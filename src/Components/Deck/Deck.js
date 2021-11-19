import React, {useState, useContext, useEffect} from "react"
import {DeckContext,CounterContext} from '../App'
import { v4 as uuidv4 } from 'uuid';


const Deck = () => {
    console.log('Rendering Deck Component');
    const deck = useContext(DeckContext);

    return (
        <div>
            {deck
                ?
                    <div>
                        <h1>This is your Deck</h1>
                        {deck.map((card)=>(<p key={uuidv4()}>{card.word}</p>))}
                    </div>
                :   null
            }
        </div>
    )
}

export default Deck;
import React, {useContext} from "react"
import {DeckContext} from '../App'
import './Deck.css'
import Card from './Card/Card'
import { v4 as uuidv4 } from 'uuid';


const Deck = () => {
    console.log('Rendering Deck Component');
    const deck = useContext(DeckContext);

    return (
        <>
            {deck
                ?
                    <div className='Deck'>
                        <h1 className='Deck-title'>Deck:</h1>
                        {deck.map((card)=>(<Card key={uuidv4()} card={card}/>))}
                    </div>
                :   null
            }
        </>
    )
}

export default Deck;
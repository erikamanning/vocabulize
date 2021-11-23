import React, {useContext} from "react"
import {DeckContext} from '../App'
import './Deck.css'
import Card from './Card/Card'
import { v4 as uuidv4 } from 'uuid';
import { motion } from "framer-motion";

const Deck = () => {
    console.log('Rendering Deck Component');
    const {deck} = useContext(DeckContext);

    return (
        <div
           >
            {deck
                ?
                    <div className='Deck' style={{marginTop:'5rem'}}>
                        {Object.keys(deck).map((cardId)=>(<Card key={uuidv4()} card={deck[cardId]}/>))}
                    </div>
                :   null
            }
        </div>
    )
}

export default Deck;
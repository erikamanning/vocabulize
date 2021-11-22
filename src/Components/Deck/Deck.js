import React, {useState,useContext} from "react"
import {DeckContext} from '../App'
import './Deck.css'
import Card from './Card/Card'
import { v4 as uuidv4 } from 'uuid';
import {DECK_SIZE} from '../App'

const Deck = () => {
    const firstCardNum = 1;
    console.log('Rendering Deck Component');
    const {deck} = useContext(DeckContext);
    const [currentCard,setCurrentCard] = useState(firstCardNum);

    const nextCard = () => {
        if(currentCard<DECK_SIZE){
            setCurrentCard(cc=>cc+1);
        }
        else{
            alert('You are already on the LAST card!')
        }
    }

    const previousCard = () => {
        if(currentCard>1){
            setCurrentCard(cc=>cc-1);
        }
        else{
            alert('You are already on the FIRST card!')
        }
    }

    return (
        <>
            {deck
                ?
                    <div className='Deck'>
                        <h1 className='Deck-title'>Deck:</h1>
                        <Card key={uuidv4()} card={deck[currentCard]}/>
                        <div>                            
                            <button onClick={previousCard} >Previous</button>
                            <button onClick={nextCard} >Next</button>
                        </div>
                        <h2>{currentCard} of {DECK_SIZE}</h2>
                    </div>
                :   null
            }
        </>
    )
}

export default Deck;
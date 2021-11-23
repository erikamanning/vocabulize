import React, {useState,useContext} from "react"
import {DeckContext} from '../App'
import './Deck.css'
import Card from './Card/Card'
import { v4 as uuidv4 } from 'uuid';
import { motion } from "framer-motion";
import {DECK_SIZE} from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

const Deck = () => {
    const firstCardNum = 1;
    console.log('Rendering Deck Component');
    const {deck} = useContext(DeckContext);
    const [currentCard,setCurrentCard] = useState(firstCardNum);

    const arrowLeftIcon = <FontAwesomeIcon icon={faArrowAltCircleLeft} />;
    const arrowRightIcon = <FontAwesomeIcon icon={faArrowAltCircleRight} />;


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
        <div
           >
            {deck
                ?
                    <div className='Deck'>
                        <Card key={uuidv4()} card={deck[currentCard]}/>
                        <h2 className='Deck-center Deck-red'>{currentCard} of {DECK_SIZE}</h2>
                        <div className='Deck-center'>                            
                            <button className='Deck-button' onClick={previousCard} >{arrowLeftIcon}</button>
                            <button className='Deck-button' onClick={nextCard} >{arrowRightIcon}</button>
                        </div>
                    </div>
                :   null
            }
        </div>
    )
}

export default Deck;
import React, {useState,useContext} from "react"
import {DeckContext} from '../App'
import './Deck.css'
import Card from './Card/Card'
import { v4 as uuidv4 } from 'uuid';
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
        <>
            {deck
                ?
                    <div className='Deck'>
                        <h1 className='Deck-title'>Deck:</h1>
                        <h2 className='Deck-center'>{currentCard} of {DECK_SIZE}</h2>
                        <Card key={uuidv4()} card={deck[currentCard]}/>
                        <div className='Deck-center'>                            
                            <button className='Deck-button' onClick={previousCard} >{arrowLeftIcon}</button>
                            <button className='Deck-button' onClick={nextCard} >{arrowRightIcon}</button>
                        </div>
                    </div>
                :   null
            }
        </>
    )
}

export default Deck;
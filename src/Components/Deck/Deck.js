import React, {useState,useContext} from "react"
import {DeckContext} from '../App'
import './Deck.css'
import Card from './Card/Card'
import { v4 as uuidv4 } from 'uuid';
import {DECK_SIZE} from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Loading from "../Loading";

const Deck = () => {
    const firstCardNum = 1;
    const {deck, newDeck} = useContext(DeckContext);
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

    const resetDeck = () => {
        newDeck();
        setCurrentCard(firstCardNum);
    }

    return (
        <div
           >
            {deck
                ?
                    <div className='Deck'>
                        <div className='Deck-center'>
                            <button className='Deck-new-deck' onClick={resetDeck}>Get a New Deck</button>
                        </div>
                        <Card key={uuidv4()} card={deck[currentCard]}/>
                        <h2 className='Deck-center Deck-red'>{currentCard} of {DECK_SIZE}</h2>
                        <div className='Deck-center'>                            
                            <button className='Deck-button' onClick={previousCard} >{arrowLeftIcon}</button>
                            <button className='Deck-button' onClick={nextCard} >{arrowRightIcon}</button>
                        </div>
                    </div>
                : <Loading />
            }
        </div>
    )
}

export default Deck;
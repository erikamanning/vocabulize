import './App.css';
import RandomWordsAPI from './RandomWordsAPI';
import Navigation from './Navigation';
import React, {useEffect,useState} from "react";
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const DECK_SIZE = 3; 
const DeckContext = React.createContext();
const  CounterContext= React.createContext();

function App() {

  const [deck, setDeck] = useState(false);

  const initializeDeck = (deckData) => {

    const myDeck = {};

    let cardNumber = 1;

    for(let card of deckData){
      card['drawing'] = false;
      card['number'] = cardNumber;
      myDeck[cardNumber] = card;
      cardNumber++;
    }
    return myDeck;
  }

  useEffect(()=>{

    async function getWords(){

      let words = await RandomWordsAPI.getWords(DECK_SIZE);
      words = initializeDeck(words);
      setDeck(words);
    }

    if(!deck){
      getWords();
    }

  },[deck]);

  const updateDrawing = (cardId, drawing) => {

      let card = deck[cardId];
      card['drawing'] = drawing;      

      setDeck(d=>({
        ...d,
        [cardId]:card
      }));
  }

  return (
          <div className="App">
            <DeckContext.Provider value={{deck, updateDrawing}}>
              <motion.div
                transition={{duration:1, delay:.5}}
                inital={ {opacity:0}}
                animate={{opacity:1, y:20}}>
                <header>
                  <Link to='/' className='title'>Vocabulize</Link>
                </header>
                <Navigation />
              </motion.div>
            </DeckContext.Provider>
          </div>
  );
}

export {DeckContext,CounterContext,DECK_SIZE};
export default App;

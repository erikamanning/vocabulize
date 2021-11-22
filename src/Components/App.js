import './App.css';
import RandomWordsAPI from './RandomWordsAPI';
import Navigation from './Navigation';
import Home from './Home/Home';
import React, {useEffect,useState} from "react";
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const DeckContext = React.createContext();
const  CounterContext= React.createContext();

function App() {

  const [deck, setDeck] = useState(false);

  const initializeDeck = (deckData) => {

    const myDeck = {};

    for(let card of deckData){

      let cardId = uuidv4();
      card['drawing'] = false;
      card['id'] = cardId;   
      myDeck[cardId] = card;
    }
    return myDeck;
  }

  useEffect(()=>{

    async function getWords(){

      let words = await RandomWordsAPI.getWords(3);
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
                  <h1 className='title'>Vocabulize</h1>
                </header>
                <Navigation />
              </motion.div>
            </DeckContext.Provider>
          </div>
  );
}

export {DeckContext,CounterContext};
export default App;

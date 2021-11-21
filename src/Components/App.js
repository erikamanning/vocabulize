import './App.css';
import RandomWordsAPI from './RandomWordsAPI';
import Navigation from './Navigation';
import Home from './Home';
import React, {useEffect,useState} from "react";
import { motion } from 'framer-motion';

const DeckContext = React.createContext();
const  CounterContext= React.createContext();

function App() {

  const [deck, setDeck] = useState(false);

  useEffect(()=>{

    async function getWords(){

      let words = await RandomWordsAPI.getWords(1);
      console.log('Words: ', words);
      setDeck(words);
    }

    if(!deck){
      getWords();
    }

  },[deck]);

  return (
          <div className="App">
            <DeckContext.Provider value={deck}>
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
            <Home />
          </div>
  );
}

export {DeckContext,CounterContext};
export default App;

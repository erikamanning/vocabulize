import './App.css';
import RandomWordsAPI from './RandomWordsAPI';
import Navigation from './Navigation'
import React, {useEffect,useState} from "react"
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
              <h1>Welcome to Vocabulize</h1>
              <Navigation />
            </DeckContext.Provider>
          </div>
  );
}

export {DeckContext,CounterContext};
export default App;

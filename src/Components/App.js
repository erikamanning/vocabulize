import './App.css';
import RandomWordsAPI from './RandomWordsAPI';
import Navigation from './Navigation'
import React, {useEffect,useState} from "react"

const DeckContext = React.createContext();


function App() {

  const [deck, setDeck] = useState([]);

  useEffect(()=>{

    async function getWords(){

      let words = await RandomWordsAPI.getWords();
      console.log('Word: ', words);
      setDeck(words);
    }

    if(deck && deck.length === 0){
      getWords();
    }

  },[deck]);

  console.log('Deck: ', deck);

  return (
    <div className="App">
      <DeckContext.Provider value={{deck}}>
        <h1>Welcome to Vocabulize</h1>
        <Navigation />
      </DeckContext.Provider>
    </div>
  );
}

export {DeckContext};
export default App;

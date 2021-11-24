import React, {useContext, useEffect, useState} from "react"
import { DeckContext } from "../App"
import QuizCard from "./QuizCard/QuizCard";
import { v4 as uuidv4 } from 'uuid';
import { motion } from "framer-motion";
import './Quiz.css'
import {DECK_SIZE} from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { getRandIndex, shuffleArr } from "../../helpers";


const QuizContext = React.createContext();

const Quiz = () => {

    console.log('loading quiz component')

    const {deck} = useContext(DeckContext);
    const [quiz,setQuiz] = useState(false);
    const [score, setScore] = useState(0);
    const [mode,setMode] = useState('easy');
    const firstCardNum=1;
    const [currentCard,setCurrentCard] = useState(firstCardNum);
    const arrowLeftIcon = <FontAwesomeIcon icon={faArrowAltCircleLeft} />;
    const arrowRightIcon = <FontAwesomeIcon icon={faArrowAltCircleRight} />;


    useEffect(()=>{

        if(!quiz){
            const shuffledCardIds = shuffleDeck(deck);
            setQuiz(shuffledCardIds);
        }
    },[]);

    /*

        updateQuizScore functions
        increaseScore & decrease score

    */

    const shuffleDeck = (cards) => {

        const cardIds = Object.keys(cards);
        return shuffleArr(cardIds);
    }

    const handleSwitch = ()=>{
        if(mode==='easy')
            setMode('hard');
        else
            setMode('easy');
    }

    const increaseScore = () => {
        if(score<DECK_SIZE)
            setScore(s=>s+1);
    }
    const decreaseScore = () => {
        if(score>0)
            setScore(s=>s-1); 
    }

    const nextCard = () => {
        if(currentCard<DECK_SIZE)
            setCurrentCard(cc=>cc+1);
        else
            alert('You are already on the LAST question!')
    }

    const previousCard = () => {
        if(currentCard>1)
            setCurrentCard(cc=>cc-1); 
        else
            alert('You are already on the FIRST question!')
    }

    return (
        <div>
            {deck && quiz
                ?
                <motion.div
                initial={{ opacity: 0, y:20}}
                animate={{ opacity: 1, y:0 }}
                transition={{duration:1, delay:.5}}
                className='Quiz'>
                    <h1 className='Quiz-title'>Quiz</h1>
                    <h3><b>Mode: </b> <span className='Quiz-mode'>{mode.toUpperCase()}</span></h3>
                    <label className="mode-switch">
                        <input onChange={handleSwitch} type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <h5><b>Score: {`${score} / ${DECK_SIZE}`}</b></h5>
                    <QuizContext.Provider value={{quiz,mode, increaseScore, decreaseScore}}>

                        {
                            quiz 
                            ? <QuizCard key={uuidv4()} questionId={currentCard} />
                            : <p>Loading Quiz...</p>
                        }
                        <h2 className='Quiz-center Quiz-red'>{currentCard} of {DECK_SIZE}</h2>

                        <div className='Quiz-center'>                 
                            <button className='Quiz-button' onClick={previousCard} >{arrowLeftIcon}</button>
                            <button className='Quiz-button' onClick={nextCard} >{arrowRightIcon}</button>
                        </div>


                    </QuizContext.Provider>

                </motion.div>

                :null
                }
        </div>

    )

}

export {QuizContext};
export default Quiz;
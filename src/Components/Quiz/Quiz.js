import React, {useContext, useEffect, useState} from "react"
import { DeckContext } from "../App"
import QuizCard from "./QuizCard/QuizCard";
import { v4 as uuidv4 } from 'uuid';
import { motion } from "framer-motion";
import './Quiz.css'
import {DECK_SIZE} from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import {initializeQuizCard, shuffleAnswerIds,getAnswers, getAnswerIds} from './QuizHelpers'
import { shuffleArr } from "../../helpers";
import Loading from "../Loading";

const QuizContext = React.createContext();

const Quiz = () => {

    console.log('loading quiz component')

    const {deck} = useContext(DeckContext);
    const [quiz,setQuiz] = useState(false);
    const [quizScore, setQuizScore] = useState(0);
    const [mode,setMode] = useState('easy');
    const firstCardNum=0;
    const [currentCard,setCurrentCard] = useState(firstCardNum);
    const arrowLeftIcon = <FontAwesomeIcon icon={faArrowAltCircleLeft} />;
    const arrowRightIcon = <FontAwesomeIcon icon={faArrowAltCircleRight} />;


    useEffect(()=>{

        if(!quiz && deck){
            console.log('deck: ', deck);
            const shuffledCardIds = shuffleDeck(deck);
            console.log('shuffledCardIds: ', shuffledCardIds);

            const quizData = {};
            let i=1;

            for(let cardId of shuffledCardIds){
                let answerIds = getAnswerIds(cardId,deck,2 );
                let answers = getAnswers(answerIds,deck);
                let answerOrder = shuffleAnswerIds(answerIds);
                let initialQuizCardState = initializeQuizCard(cardId,answers,answerOrder,deck);

                quizData[cardId] = initialQuizCardState;
                // i++;
            }
            quizData.questionOrder = shuffledCardIds;
            console.log('Quiz Data: ', quizData);
            setQuiz(quizData);
        }
    },[deck]);



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
        if(quizScore<DECK_SIZE)
            setQuizScore(s=>s+1);
    }

    const nextCard = () => {
        if(currentCard<DECK_SIZE-1)
            setCurrentCard(cc=>cc+1);
        else
            alert('You are already on the LAST question!')
    }

    const previousCard = () => {
        if(currentCard>0)
            setCurrentCard(cc=>cc-1); 
        else
            alert('You are already on the FIRST question!')
    }

    const updateCard = (cardId, userAnswer, score) => {

        let newCardData = {
            ...quiz[cardId],
            ['questionOpen']:false,
            ['selectedAnswer']:userAnswer,
            ['score']:score,
        };

        setQuiz((q)=>({
            ...q,
            [`${cardId}`]:{...newCardData}
        }));
    }


    const pickAnswer = (cardId,answerId) => {
        console.log(`Picked answer! ${answerId} `);
        console.log(`Card Id: `, cardId);
        console.log(`quiz[cardId].correctAnswer: `, quiz[cardId].correctAnswer);


        if(answerId == quiz[cardId].correctAnswer){
            console.log('CORRECT!!!');
            increaseScore();
            updateCard(cardId, answerId, 1);
        }
        else{
            console.log('WRONG!!!!!');
            updateCard(cardId, answerId, 0);
        }
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
                    <h3 className='Quiz-center Quiz-red'><b>Score: {`${quizScore} / ${DECK_SIZE}`}</b></h3>
                    <QuizContext.Provider value={{quiz,mode, pickAnswer}}>

                        {
                            quiz 
                            ? <QuizCard key={uuidv4()} cardData={quiz[quiz.questionOrder[currentCard]]} />
                            : <p>Loading Quiz...</p>
                        }
                        <h2 className='Quiz-center Quiz-red'>{currentCard+1} of {DECK_SIZE}</h2>

                        <div className='Quiz-center'>                 
                            <button className='Quiz-button' onClick={previousCard} >{arrowLeftIcon}</button>
                            <button className='Quiz-button' onClick={nextCard} >{arrowRightIcon}</button>
                        </div>


                    </QuizContext.Provider>

                </motion.div>

                : <Loading page='quiz'/>
                }

        </div>

    )

}

export {QuizContext};
export default Quiz;
import React, {useContext, useState, useEffect} from "react"
import QuizCardText from "./QuizCardText";
import QuizCardAnswers from "./QuizCardAnswers";
import QuizCardDrawing from "./QuizCardDrawing";
import {QuizContext} from '../Quiz';
import './QuizCard.css'
import '../../../Components/Deck/Card/Card.css'
import { shuffleArr } from "../../../helpers";
import { DeckContext } from "../../App";

const QuizCardContext = React.createContext();

const QuizCard = ({questionId}) => {

    const {deck} = useContext(DeckContext);
    const {mode} = useContext(QuizContext);
    const [quizCard,setQuizCard] = useState(false);
    const [selectedAnswer,setSelectedAnswer] = useState(null);
    const [questionOpen, setQuestionOpen] = useState(true);

    const shuffleAnswerIds = (answerIds) => {
        return shuffleArr(answerIds);
    }

    const getAnswers = (answerIds) => {

        let answers = {};

        for(let id of answerIds){
            answers[id] = deck[id].definition;
        }
        return answers;
    }

    const getAnswerIds = () => {
        let wrongAnswerIds = getWrongAnswerIds();
        let answerIds = [questionId, ...wrongAnswerIds]
        answerIds = shuffleArr(answerIds);
        return answerIds;
    }

    const getWrongAnswerIds = () => {
        const quizCardIds = [...Object.keys(deck)];
        const index = quizCardIds.indexOf(questionId.toString());
        quizCardIds.splice(index,1);
        return quizCardIds;
    }

    useEffect(()=>{

        const initializeQuizCard = (answers,answerOrder) => {
            return {
                word: deck[questionId].word,
                correctAnswer: questionId,
                answers,
                answerOrder,
            }
        }

        if(!quizCard.size){
            let answerIds = getAnswerIds();
            let answers = getAnswers(answerIds);
            let answerOrder = shuffleAnswerIds(answerIds);
            let initialQuizCardState = initializeQuizCard(answers,answerOrder);

            setQuizCard(initialQuizCardState);
        }
    },[])


    const pickAnswer = (answerId) => {
        console.log(`Picked answer! ${answerId} `);
        if(answerId == quizCard.correctAnswer)
            console.log('CORRECT!!!');
        else
            console.log('WRONG!!!!!');

        setQuestionOpen(false);
        setSelectedAnswer(answerId);
        
    }

    return (
        <div>
            {quizCard 
                ?
                <QuizCardContext.Provider value={{quizCard,pickAnswer, selectedAnswer}}>
                    <div className='Card'>
                        <div className='card-container'>
                            <QuizCardText  word={quizCard.word} />
                            <p className='QuizCard-drawing-title'><b>Your Drawing:</b></p>
                            {
                                mode === 'easy'
                                ? <div> 
                                    { quizCard.drawing
                                    ? <QuizCardDrawing drawing={quizCard}/>
                                    : <p className='QuizCard-no-drawing-message'><i>No drawing yet!</i></p>
                                }
                                </div>
                                : <p className='QuizCard-no-drawing-message'><i>No drawing shown on Hard Mode.</i></p>
                            }

                            <QuizCardAnswers answers={quizCard.answers}/>
                        </div>
                    </div>
                </QuizCardContext.Provider>
                : null
            }
        </div>
    )

}

export {QuizCardContext};
export default QuizCard;

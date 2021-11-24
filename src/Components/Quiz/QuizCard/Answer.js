import React, {useState, useContext} from "react"
import { QuizCardContext } from "./QuizCard";
import './Answer.css'
import { QuizContext } from '../Quiz'
const Answer = ({letter, answerId, text}) => {

    const [highlight,setHighlight] = useState('');
    const [circleColor, setCircleColor] = useState('circle-blue');
    const {pickAnswer} = useContext(QuizContext);
    const {cardData} = useContext(QuizCardContext);
    let selectionHighlight = '';


    const handleMouseEnter = () => {
        setHighlight('Answer-highlight');
        setCircleColor('circle-white')
    }

    const handleMouseLeave = () => {
        setHighlight('');
        setCircleColor('circle-blue')
    }

    const selectAnswer = () => {
        pickAnswer(cardData.id,answerId);
    }

    const getClosedAnswer = () => {

        let highlightClass = 'green';
        let textClass = 'green';  

        if(answerId == cardData.correctAnswer){
            highlightClass='highlight-green';
            textClass = 'green-text';
        }
        else if(answerId== cardData.selectedAnswer){
                highlightClass='highlight-red'
                textClass = 'red-text';
        }

        return (
            <div className={`Answer ${highlightClass}`}>
                <div className={`Answer-letter circle-white ${textClass}`}>{letter}</div> 
                <span className={`Answer-text`}>{text}</span>
            </div>
        )
    }

    return (

        <div>
            {
                cardData.questionOpen
                ?
                <div onClick={selectAnswer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`Answer ${selectionHighlight} ${highlight}`}>
                    <div className={`Answer-letter ${circleColor}`}>{letter}</div> 
                    <span className={`Answer-text`}>{text}</span>
                </div>
                :getClosedAnswer()                 
            }
        </div>

    )


}

export default Answer;
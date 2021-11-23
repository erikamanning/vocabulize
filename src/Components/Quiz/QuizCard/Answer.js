import React, {useState, useContext} from "react"
import { QuizCardContext } from "./QuizCard";
import './Answer.css'

const Answer = ({letter, answerId, text}) => {

    const [highlight,setHighlight] = useState('');
    const [circleColor, setCircleColor] = useState('circle-blue');
    const {quizCard,pickAnswer, selectedAnswer} = useContext(QuizCardContext);
    let selectionHighlight = '';

    if(selectedAnswer){
        if(selectedAnswer == answerId){
            if(selectedAnswer == quizCard.correctAnswer)
                selectionHighlight = 'highlight-green';
            else
                selectionHighlight = 'highlight-red';
        }
    }

    const handleMouseEnter = () => {
        setHighlight('Answer-highlight');
        setCircleColor('circle-white')
    }

    const handleMouseLeave = () => {
        setHighlight('');
        setCircleColor('circle-blue')
    }

    const selectAnswer = () => {
        pickAnswer(answerId);
    }

    return (

        <div onClick={selectAnswer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`Answer ${selectionHighlight} ${highlight}`}>
            <div className={`Answer-letter ${circleColor}`}>{letter}</div> 
            <span className={`Answer-text`}>{text}</span>
        </div>

    )


}

export default Answer;
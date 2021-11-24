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

    return (

        <div onClick={selectAnswer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`Answer ${selectionHighlight} ${highlight}`}>
            <div className={`Answer-letter ${circleColor}`}>{letter}</div> 
            <span className={`Answer-text`}>{text}</span>
        </div>

    )


}

export default Answer;
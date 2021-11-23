import React from "react"
import { v4 as uuidv4 } from 'uuid';
import '../../Deck/Card/Card.css'
import './QuizCardAnswers.css'
import Answer from './Answer'

const QuizCardAnswers = ({answers}) => {

    const letters = ['A', 'B', 'C'];

    return (

        <div>
            <h5>Choose one of the following:</h5>
            <div className='QuizCardAnswers'>
                {Object.keys(answers).map((id,i)=>(<Answer key={uuidv4()} letter={letters[i]} answerId={id} text={answers[id]} />))}
            </div>
        </div>
    )

}

export default QuizCardAnswers;
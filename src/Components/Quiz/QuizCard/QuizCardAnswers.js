import React from "react"
import { v4 as uuidv4 } from 'uuid';
import Answer from './Answer'

const QuizCardAnswers = ({answers}) => {

    // need to add shuffle answers here or before this point
    const letters = ['A', 'B', 'C'];

    return (

        <div>
            <h5>Choose one of the following:</h5>
            <div>
                {answers.map((answer,i)=>(<Answer key={uuidv4()} letter={letters[i]} text={answer} />))}
            </div>
        </div>
    )

}

export default QuizCardAnswers;
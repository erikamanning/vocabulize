import React from "react"
import { v4 as uuidv4 } from 'uuid';


const QuizCardAnswers = ({answers}) => {

    // need to add shuffle answers here or before this point

    return (

        <div>
            <h5>Choose one of the following:</h5>
            <ul>
                {answers.map((answer)=>(<li key={uuidv4()}>{answer}</li>))}
            </ul>
        </div>
    )

}

export default QuizCardAnswers;
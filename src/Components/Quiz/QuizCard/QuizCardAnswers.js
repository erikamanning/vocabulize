import React from "react"

const QuizCardAnswers = ({answers}) => {

    // need to add shuffle answers here or before this point

    return (

        <div>
            <h5>Choose one of the following:</h5>
            <ul>
                {answers.map((answer)=>(<li>{answer}</li>))}
            </ul>
        </div>
    )

}

export default QuizCardAnswers;
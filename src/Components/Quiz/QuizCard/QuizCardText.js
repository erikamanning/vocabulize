import React from "react"
import '../../Deck/Card/Card.css'

const QuizCardText = ({word}) => {


    return (

        <div>
            <h3 className='card-word'><b>Word: </b>{word}</h3>
        </div>
    )

}

export default QuizCardText;
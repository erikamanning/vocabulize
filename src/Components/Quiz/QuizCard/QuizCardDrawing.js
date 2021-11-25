import React from "react"
import './QuizCardDrawing.css'

const QuizCardDrawing = ({drawing}) => {

    return (

        <div className='QuizCardDrawing'>
            <p>Your Drawing: </p>
            <img className='QuizCardDrawing-image' src={drawing} alt="word-drawing" />
        </div>
    )

}

export default QuizCardDrawing;
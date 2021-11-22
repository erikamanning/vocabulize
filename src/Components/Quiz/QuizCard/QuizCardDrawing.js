import React from "react"
import './QuizCardDrawing.css'

const QuizCardDrawing = ({drawing}) => {

    let dataURL = drawing.toDataURL();

    return (

        <div>
            <h3>QuizCardDrawing</h3>
            <img src="dataURL" alt="word-drawing" />
        </div>
    )

}

export default QuizCardDrawing;
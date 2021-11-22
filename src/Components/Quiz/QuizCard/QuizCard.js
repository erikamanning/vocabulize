import React, {useContext} from "react"
import QuizCardText from "./QuizCardText";
import QuizCardAnswers from "./QuizCardAnswers";
import QuizCardDrawing from "./QuizCardDrawing";
import {QuizContext} from '../Quiz';
import './QuizCard.css'

const QuizCard = ({question}) => {

    const {quiz,mode} = useContext(QuizContext);

    return (

        <div className='QuizCard'>
            <h1>QuizCard</h1>
            <QuizCardText word={question.word} />
            <QuizCardAnswers answers={[question.answer, question.wrongAnswer1, question.wrongAnswer2]}/>
            {
                mode === 'easy'
                ? <div> 
                    { question.drawing
                    ? <QuizCardDrawing drawing={question}/>
                    : <p className='QuizCard-no-drawing-message'>No drawing yet!</p>
                  }
                </div>
                : <p className='QuizCard-no-drawing-message'><i>No drawing shown on Hard Mode.</i></p>
            }
        </div>
    )

}

export default QuizCard;
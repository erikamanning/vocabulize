import React, {useContext} from "react"
import QuizCardText from "./QuizCardText";
import QuizCardAnswers from "./QuizCardAnswers";
import QuizCardDrawing from "./QuizCardDrawing";
import {QuizContext} from '../Quiz';
import './QuizCard.css'
import '../../../Components/Deck/Card/Card.css'

const QuizCard = ({question}) => {

    const {quiz,mode} = useContext(QuizContext);

    return (

        <div className='Card'>
            <div className='card-container'>
                <QuizCardText  word={question.word} />
                <p className='QuizCard-drawing-title'><b>Your Drawing:</b></p>
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

                <QuizCardAnswers answers={[question.answer, question.wrongAnswer1, question.wrongAnswer2]}/>
            </div>
        </div>
    )

}

export default QuizCard;
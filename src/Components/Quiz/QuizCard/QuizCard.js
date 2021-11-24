import React, {useContext, useState, useEffect} from "react"
import QuizCardText from "./QuizCardText";
import QuizCardAnswers from "./QuizCardAnswers";
import QuizCardDrawing from "./QuizCardDrawing";
import {QuizContext} from '../Quiz';
import './QuizCard.css'
import '../../../Components/Deck/Card/Card.css'


const QuizCardContext = React.createContext();

const QuizCard = ({cardData}) => {

    const {mode} = useContext(QuizContext);

    console.log('Quiz Card');
    console.log('Card Data: ', cardData);



    return (
        <div>
            {cardData 
                ?
                <QuizCardContext.Provider value={{cardData}}>
                    <div className='Card'>
                        <div className='card-container'>

                            {
                                !cardData.questionOpen
                                ? <p><b>Question Score: </b> {cardData.score}/1</p>
                                : null
                            }

                            <QuizCardText  word={cardData.word} />
                            {/* <p className='QuizCard-drawing-title'><b>Your Drawing:</b></p> */}
                            {
                                mode === 'easy'
                                ? <div> 
                                    { cardData.drawing
                                    ? <QuizCardDrawing drawing={cardData}/>
                                    : <p className='QuizCard-no-drawing-message'><i>No drawing yet!</i></p>
                                }
                                </div>
                                : <p className='QuizCard-no-drawing-message'><i>No drawing shown on Hard Mode.</i></p>
                            }

                            <QuizCardAnswers answers={cardData.answers} answerOrder={cardData.answerOrder} />
                        </div>
                    </div>
                </QuizCardContext.Provider>
                : null
            }
        </div>
    )

}

export {QuizCardContext};
export default QuizCard;

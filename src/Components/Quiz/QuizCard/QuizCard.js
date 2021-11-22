import React from "react"
import QuizCardText from "./QuizCardText";
import QuizCardAnswers from "./QuizCardAnswers";

const QuizCard = ({question}) => {


    return (

        <div>
            <h1>QuizCard</h1>
            <QuizCardText word={question.word} />
            <QuizCardAnswers answers={[question.answer, question.wrongAnswer1, question.wrongAnswer2]}/>
        </div>
    )

}

export default QuizCard;
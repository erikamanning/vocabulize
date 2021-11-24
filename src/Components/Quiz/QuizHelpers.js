import { shuffleArr } from "../../helpers";

const initializeQuizCard = (questionId,answers,answerOrder,deck) => {
    return {
        id:questionId,
        word: deck[questionId].word,
        correctAnswer: questionId,
        answers,
        answerOrder,
        questionOpen:true,
        selectedAnswer:null,
        score:0
    }
}


const shuffleAnswerIds = (answerIds) => {
    return shuffleArr(answerIds);
}

const getAnswers = (answerIds,deck) => {

    let answers = {};

    for(let id of answerIds){
        answers[id] = deck[id].definition;
    }
    return answers;
}

const getAnswerIds = (questionId,deck) => {
    let wrongAnswerIds = getWrongAnswerIds(questionId,deck);
    let answerIds = [questionId, ...wrongAnswerIds]
    answerIds = shuffleArr(answerIds);
    return answerIds;
}

const getWrongAnswerIds = (questionId, deck) => {
    const quizCardIds = [...Object.keys(deck)];
    const index = quizCardIds.indexOf(questionId.toString());
    quizCardIds.splice(index,1);
    return quizCardIds;
}

export {initializeQuizCard,shuffleAnswerIds,getAnswers, getAnswerIds};


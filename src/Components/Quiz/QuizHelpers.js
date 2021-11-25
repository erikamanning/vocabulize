import { shuffleArr, getRandItems } from "../../helpers";

const initializeQuizCard = (questionId,answers,answerOrder,deck) => {

    let cardDrawing;

    if(deck[questionId].drawing)
        cardDrawing = deck[questionId].drawing.toDataURL()
    else
        cardDrawing=deck[questionId].drawing;

    return {
        id:questionId,
        word: deck[questionId].word,
        correctAnswer: questionId,
        drawing:cardDrawing,
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

const getAnswerIds = (questionId,deck, numWrongAnswers) => {
    let wrongAnswerIds = getWrongAnswerIds(questionId,deck,numWrongAnswers);
    let answerIds = [questionId, ...wrongAnswerIds]
    answerIds = shuffleArr(answerIds);
    return answerIds;
}

const getWrongAnswerIds = (questionId, deck, numWrongAnswers) => {

    const quizCardIds = [...Object.keys(deck)];
    const index = quizCardIds.indexOf(questionId.toString());
    quizCardIds.splice(index,1);

    let randItems = getRandItems(quizCardIds,2)

    return randItems;
}

export {initializeQuizCard,shuffleAnswerIds,getAnswers, getAnswerIds};


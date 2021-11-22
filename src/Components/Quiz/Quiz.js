import React, {useContext, useEffect, useState} from "react"
import { DeckContext } from "../App"
import QuizCard from "./QuizCard/QuizCard";


const Quiz = () => {

    console.log('loading quiz component')

    const {deck} = useContext(DeckContext);
    const [quiz,setQuiz] = useState(false);

    useEffect(()=>{


        if(!quiz){
            const cardIds = Object.keys(deck);
            const shuffledCards = shuffleDeck(cardIds);
            let quizDataIds = getQuizDataIds(shuffledCards);
            setQuiz(makeQuiz(quizDataIds));
        }
    },[]);


    const getRandIndex = (arr)=>{

        let max = arr.length-1;
        return Math.floor(Math.random() * (max - 0 + 1));
    }

    const getRandOtherCard = (arr)=>{

        let randCard = arr[getRandIndex(arr)];
        // console.log('randCard: ', randCard);
        return randCard;
    }

    const shuffleDeck = (cardIds) => {

        // console.log('card ids before shuffle: ', cardIds);

        for (let i = cardIds.length - 1; i > 0; i--) {
        
            // Generate random number
            let j = Math.floor(Math.random() * (i + 1));
                        
            [cardIds[i],cardIds[j]] = [cardIds[j], cardIds[i]];
        }
            
        // console.log('card ids after shuffle: ', cardIds);

        return cardIds;
    }

    const getQuizDataIds = (shuffledCardIds) => {

        let quizDataIds = [];
        let i=0;
        for(let cardId of shuffledCardIds){
            i++;
            let cardsCopy = [...shuffledCardIds];
            // console.log(`CARDSCOPY -- untouched - i=${i}`, cardsCopy);
            cardsCopy.splice(cardsCopy.indexOf(cardId),1);
            // console.log('CARDSCOPY -- after cardId splice', cardsCopy);
            let wrongCard1 = [getRandOtherCard(cardsCopy)];
            cardsCopy.splice(cardsCopy.indexOf(wrongCard1),1);
            // console.log('CARDSCOPY -- after wrongCard1 splice', cardsCopy);
            let wrongCard2 = [getRandOtherCard(cardsCopy)];
            
            quizDataIds.push({
                card:cardId,
                wrongCard1,
                wrongCard2
            })
        }

        console.log('quizDataIds: ', quizDataIds);

        return quizDataIds;
    }

    const makeQuiz = (quizDataIds) => {

        let quizQuestions = [];


        for(let qdId of quizDataIds){

            quizQuestions.push({

                word: deck[qdId.card].word,
                answer:deck[qdId.card].definition,
                wrongAnswer1:deck[qdId.wrongCard1].definition,
                wrongAnswer2: deck[qdId.wrongCard2].definition
            });

        }

        console.log('Quiz Questions: ', quizQuestions);
        return quizQuestions;
    }







    return (
        <div>
            <h1>This is your Quiz</h1>

            {
                quiz 
                ? <div>{quiz.map((question)=>(<QuizCard question={question} />))}</div>
                : <p>Loading Quiz...</p>
}
        </div>
    )

}

export default Quiz;
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { addAnswer } from "../../../store/actions";
import { useDispatch } from "react-redux";
import { IQuestions } from "../../../types/types";
import { TypeScreen } from '../../../types/types';

import { nanoid } from 'nanoid'
// ===================================================================================
interface IQuestion {
  currentQuestion: IQuestions;
  setNumberOfCurrentQuestion: (answerOfUser: number) => void;
  setCurrentScene: (value: TypeScreen) => void; 
  questions: Array<any>
}
// ===================================================================================

const Question: React.FC<IQuestion> = ({ 
  currentQuestion,
  setNumberOfCurrentQuestion,
  setCurrentScene,
  questions
}) => {
  const [isBlocked, setIsBlocked] = useState(false);
  const dispatch = useDispatch();
  const { question, answers, correctAnswer, letterOfCorrectAnswer, numberOfQuestion } = currentQuestion;

  const [userAnswered, setUserAnswered] = useState('');

  const listOfAnswers = answers.map((elem) => elem);

  function clickOnAnswer(e: string) {
    setIsBlocked(true);  
    const userAnswer = e.split(" ");
    setUserAnswered(userAnswer[0]);

    dispatch(
      addAnswer({
        [numberOfQuestion]: {
          question: question,
          answer: correctAnswer,
          answerOfUser: userAnswer[1],
        },
      })
    );

      if (numberOfQuestion === questions.length) {
        setTimeout(() => {
          setCurrentScene('finish');
          return;
        }, 1000)
      } else {
        setTimeout(() => {
          setIsBlocked(false); 
          setNumberOfCurrentQuestion(numberOfQuestion);
          setUserAnswered('');
        }, 1000)
      }
  }

  return (
    <div className="d-grid gap-2">
      {listOfAnswers.map((elem, idx) => {

        let classnames = 'question__btn';
        if(userAnswered === letterOfCorrectAnswer && userAnswered === elem[0]){
          classnames = 'question__right';
        }else if(userAnswered !== letterOfCorrectAnswer && userAnswered === elem[0]){
          classnames = 'question__wrong';  
        }else{
          classnames = 'question__btn';
        }
            
        return (
          <div
            key={nanoid(5)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              id={elem[0] + " " + elem[1]}
              disabled={isBlocked}
              onClick={(event: any) => clickOnAnswer(event.target.id)}
              className={`button ${classnames}`}
              variant="secondary"
              size="lg"
            >
              <span className='question__letter'>{elem[0]}</span>
              {elem[1]}
            </Button>
          </div>
        );
      })}
    </div>
  );
};
export default Question;

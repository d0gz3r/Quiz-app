import React from "react"

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ICurrentScene } from "../../types/types";
import { useDispatch } from "react-redux";

import { addResults } from "../../store/actions/resultsReducerAction";
import Button from 'react-bootstrap/Button'

import correctImg from './images/correct.png';
import wrongImg from './images/wrong.png';

import { nanoid } from "nanoid";

import styles from './Finish.module.css';

interface IFinish extends ICurrentScene {
  currentTest: string;
}

const Finish: React.FC<IFinish> = ({setCurrentScene, currentTest}) => {
  const state = useTypedSelector((state) => state.answersReducer); 

  const dispatch = useDispatch();

  const answers = Object.values(state);

  const numberOfCorrectAnswers = answers.reduce((correctAnswers, elem) => { 
    if(elem.answerOfUser === elem.answer){
      correctAnswers ++; 
    }
    return correctAnswers;
  }, 0);

  const finishTest = () => {
    const percentOfCorrectAnswers = Number(((numberOfCorrectAnswers / answers.length) * 100).toFixed(0));
    dispatch(addResults({
        test: currentTest,
        results: percentOfCorrectAnswers
      }
    ))
    setCurrentScene('profile');
  }

  return (
    <div className={styles.wrapper} style={{textAlign: 'center', marginTop: '6%'}}>
      <h1>Результаты:</h1>
      <h1 style={{marginBottom: '4%', fontSize: '30px', fontWeight: 'bold'}}>Правильно {numberOfCorrectAnswers} из {answers.length}</h1>
      {
        answers.map((elem, idx) => {
          const {question, answerOfUser, answer} = elem;
          return (
            <div 
              key={nanoid(4)}
              className={answerOfUser === answer ? styles.card__correct : styles.card__wrong}
            >
              <div style={{display: 'flex', justifyContent: 'space-between', margin: '0 auto'}}>
                <h2 style={{fontWeight: 'bold', marginRight: '10px'}}>Вопрос {idx+1}: {question}</h2>
                <img style={{width: '35px', height: '35px'}} src={answerOfUser === answer ? correctImg : wrongImg} alt="Correct or wrong" />
              </div>

                <h2 className={answerOfUser === answer ? styles.correct__answer : styles.wrong__answer}>Ваш ответ: {answerOfUser}</h2>
                <h2 className={styles.card__answer}>Правильный ответ: {answer}</h2>   
            </div>
          )
        })
      }
      <Button
        onClick={finishTest}
        className={styles.btn} variant="primary" size="lg" active
      >
        Главная
      </Button>{' '}
    </div>
  )
}

export default Finish;
import React, { useState } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { ICurrentScene } from "../../types/types";
import { TypeTests } from "../../types/types";

import ProgressBar from 'react-bootstrap/ProgressBar'
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/button";

import arrowImg from './images/arrow.png';
import edit from './images/edit.png';

import styles from './Profile.module.css';

interface IProfile extends ICurrentScene {
  setCurrentTest: (currentTest: TypeTests) => void;
}

const Profile: React.FC<IProfile> = ({setCurrentScene, setCurrentTest}) => {
  const [shortName, setShortName] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem('userName') || 'Без имени');
  const [inputData, setInputData] = useState('');
  const [isModal, setIsModal] = useState(false);
  const state = useTypedSelector((state) => state.resultsReducer);

  console.log(state);

  const handleClose = () => {
    setIsModal(false);
    setInputData('');
    setShortName(false);  
  }
  const handleOpen = () => {
    setIsModal(true); 
  }
  const handleSave = () => {
    if(inputData.replace(/\s/g, '') === ''){
      setShortName(true);
    }else{
      setShortName(false);
      setIsModal(false);
      setUserName(inputData);
      localStorage.setItem('userName', inputData);
    }
  }

  const chooseTest = (test: string) => {
    setCurrentTest(test as TypeTests);
    setCurrentScene('question');
  } 

  return (
    <>
      <div style={{height: '100%', textAlign: 'center'}}>  
        <div className={styles.header}>
          <img className={styles.header__edit} onClick={handleOpen} src={edit} alt="edit" />
          <div className={styles.avatar}>{userName[0]}</div>
          <h2 className={styles.header__name}>{userName.toString()}</h2>
        </div>
        <h1 style={{color: '#13373c', marginBottom: '20px'}}>Ваши результаты:</h1>

        <Modal show={isModal} onHide={handleClose}> 
          <Modal.Header closeButton>
            <Modal.Title>Редактирование</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
            Введите ваше имя
            <input type="text" onChange={(event) => setInputData(event.target.value)}/>
            {shortName && <h5 style={{color: 'red', marginTop: '10px'}}>Введите хотя бы 1 символ!</h5>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Закрыть
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Сохранить
            </Button>
          </Modal.Footer>
        </Modal>

        {
          state.map((elem) => {
            return (
              <div key={elem.test}>
                <div className={styles.result} id={elem.test} onClick={() => chooseTest(elem.test)}>
                  <div className={styles.result__info}>
                    <div className={styles.result__info__title}>{elem.test}</div>
                    <div className={styles.result__info__subtitle}>{elem.results}% правильных ответов</div>
                    <ProgressBar variant="info" className={styles.result__info__progress} now={elem.results} />
                  </div>   
                  <img src={arrowImg} className={styles.arrow} alt="arrow" />
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
};

export default Profile;  
import React from "react";

import { Button } from "react-bootstrap";

import { ICurrentScene } from "../../types/types";

import styles from './Start.module.css';

const Start: React.FC<ICurrentScene> = ({setCurrentScene}) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h1 style={{ fontSize: "40px", marginBottom: '10vh', color: '#000' }}>Сыграем в QUIZ?</h1>
      <Button onClick={() => setCurrentScene('profile')} variant="secondary" className={styles.startBtn} >QUIZ</Button>{' '}
    </div>
  );
};
export default Start;

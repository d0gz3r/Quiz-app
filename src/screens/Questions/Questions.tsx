import React, { useState } from "react";

// import ProgressBar from 'react-bootstrap/ProgressBar';
import Question from "./Question/Question";
import { geography, math, info } from "../../constants/questions/questions";
import { ICurrentScene } from "../../types/types";

interface IQuestions extends ICurrentScene {
  currentTest: string;
}

const Questions: React.FC<IQuestions> = ({setCurrentScene, currentTest}) => {
  let questions = geography;

  switch(currentTest){
    case 'География': 
      questions = geography;
      break;
    case 'Математика':
      questions = math;
      break; 
    case 'Информатика':
      questions = info;
      break;  
    default: break;
  }


  const [numberOfCurrentQuestion, setNumberOfCurrentQuestion] = useState<number>(0);
  const {numberOfQuestion, question} = questions[numberOfCurrentQuestion];

  return (
    <div style={{ textAlign: "center", marginTop: "10vh" }}>
      <h1 style={{ marginBottom: "6vh" }}><span style={{fontSize: '35px'}}>{numberOfQuestion}/{questions.length}.</span> {question}</h1>   
      <Question 
        currentQuestion={questions[numberOfCurrentQuestion]} 
        setNumberOfCurrentQuestion={setNumberOfCurrentQuestion} 
        setCurrentScene={setCurrentScene}
        questions={questions}
      />
    </div>
  );
};
export default Questions;

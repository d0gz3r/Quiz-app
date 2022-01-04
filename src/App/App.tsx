import React from "react";
import { useState } from "react";

import { Container } from "react-bootstrap";

import { TypeScreen, TypeTests } from "../types/types";

import Start from "../screens/Start/Start";
import Questions from "../screens/Questions/Questions";
import Finish from "../screens/Finish/Finish";
import Profile from "../screens/Profile/Profile";

import styles from "./App.module.css";

const App: React.FC = () => {
  const [currentScene, setCurrentScene] = useState<TypeScreen>("start");
  const [currentTest, setCurrentTest] = useState<TypeTests>('География'); 
 
  return (
    <Container className={styles.container}>
      {currentScene === "start" && <Start setCurrentScene={setCurrentScene} />}
      {currentScene === "question" && <Questions setCurrentScene={setCurrentScene} currentTest={currentTest} />}
      {currentScene === "finish" && <Finish setCurrentScene={setCurrentScene} currentTest={currentTest}/>}
      {currentScene === "profile" && <Profile setCurrentScene={setCurrentScene} setCurrentTest={setCurrentTest}/>}
    </Container>
  );
};

export default App;

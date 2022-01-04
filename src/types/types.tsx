
export type TypeScreen = | 'start' | 'question' | 'finish' | 'profile';

export interface IQuestions {
  numberOfQuestion: number;
  question: string;
  letterOfCorrectAnswer: string;
  correctAnswer: string;
  answers: Array<Array<string>>
}

export interface ICurrentScene {
  setCurrentScene: (currentScene: TypeScreen) => void;
}

export type TypeTests = 'География' | 'Математика' | 'Информатика';
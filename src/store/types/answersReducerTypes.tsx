export interface AnswersState{
  [numberOfQuestion: number]: {
    question: string;
    answer: string;
    answerOfUser: string;
  }
}

export interface ResetedAnswer{
  answers?: null;
}

export enum ActionTypes {
  ADD_ANSWER = 'ADD_ANSWER',
  RESET_ANSWERS = 'RESET_ANSWERS'
}

export interface AddAnswerAction {
  type: ActionTypes.ADD_ANSWER;
  payload: AnswersState;
}

export interface ResetAnswersAction {
  type: ActionTypes.RESET_ANSWERS;
}

export type AnswerAction = AddAnswerAction | ResetAnswersAction;
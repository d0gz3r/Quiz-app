import { ActionTypes, AnswersState } from "../types/answersReducerTypes";

export const addAnswer = (answer: AnswersState) => ({
  type: ActionTypes.ADD_ANSWER,
  payload: answer
})

export const resetAnswers = () => ({
  type: ActionTypes.RESET_ANSWERS
})
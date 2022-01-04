import { ActionTypes, AnswersState, ResetedAnswer, AnswerAction } from "../types/answersReducerTypes";

const initialState: ResetedAnswer | AnswersState = {
  answers: null
}

export const answersReducer = (state = initialState, action: AnswerAction): AnswersState | ResetedAnswer => {
  switch(action.type){
    case ActionTypes.ADD_ANSWER:
      if(state.hasOwnProperty('answers')){
        delete state.answers;
      }
      return {  
        ...state, 
        ...action.payload
      }
    case ActionTypes.RESET_ANSWERS:
      return state = {answers: null};

    default:
      return state;
  }

}
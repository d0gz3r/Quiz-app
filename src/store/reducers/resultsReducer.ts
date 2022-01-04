import { resultsAction, ResultsState, ActionTypes } from "../types/resultsReducerTypes";
import { geography, math, info } from "../../constants/testNames/testNames";
import { getLocalStorage } from "../../utils/localStorage";

const localStorageState = getLocalStorage('store');

let initialState: ResultsState[] = [
  {
    test: geography,
    results: 0
  },
  {
    test: math,
    results: 0
  },
  {
    test: info,
    results: 0
  }
]

if(Object.keys(localStorageState).length !== 0){
  initialState = localStorageState;
}

export const resultsReducer = (state = initialState, action: resultsAction): ResultsState[] => {
  switch(action.type){
    case(ActionTypes.ADD_RESULTS):
      const newState = state;
      newState.forEach((el) => {
        if(el.test === action.payload.test){
          el.results = action.payload.results;
        }
      })
      return state = newState;    
    default: 
      return state;
  }
}  
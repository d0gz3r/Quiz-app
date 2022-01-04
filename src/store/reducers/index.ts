import { combineReducers } from "redux";
import { answersReducer } from "./answersReducer";
import { resultsReducer } from "./resultsReducer";


export const rootReducer = combineReducers({
  answersReducer: answersReducer,
  resultsReducer: resultsReducer
})

export type RootState = ReturnType<typeof rootReducer>
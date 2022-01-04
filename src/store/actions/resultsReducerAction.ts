import { ActionTypes, ResultsState } from "../types/resultsReducerTypes";

export const addResults = (result: ResultsState) => ({
  type: ActionTypes.ADD_RESULTS,
  payload: result
})
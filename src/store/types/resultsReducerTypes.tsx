export interface ResultsState{
  test: string;
  results: number;
}

export enum ActionTypes {
  ADD_RESULTS = 'ADD_RESULTS'
}

export interface resultsAction{
  type: ActionTypes.ADD_RESULTS;
  payload: ResultsState;
}
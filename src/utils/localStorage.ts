import { ResultsState } from "../store/types/resultsReducerTypes";

export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);

  if(data !== null){
    return JSON.parse(data);
  }

  return {};
}

export const setLocalStorage = (key: string, data: ResultsState[]) => {
  localStorage.setItem(key, JSON.stringify(data));
}
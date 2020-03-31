import { actionSetLetterMatched } from "../ducks/randomWordReducer";
import { actionSetGuesses } from "../ducks/guessesReducer";
import { actionSetSteps } from "../ducks/stepsReducer";

export const handleLetterClick = (letter) => (dispatch, getState) => {
  const currentWord = getState().randomWord;
  dispatch(actionSetLetterMatched(letter));
  dispatch(actionSetGuesses(letter));

  if(!currentWord.includes(letter)) {
    dispatch(actionSetSteps());
  }
};

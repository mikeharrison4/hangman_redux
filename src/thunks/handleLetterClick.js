import { actionSetLetterMatched } from "../ducks/randomWordReducer";
import {actionSetCorrectGuesses, actionSetIncorrectGuesses} from "../ducks/guessesReducer";
import { actionSetSteps } from "../ducks/stepsReducer";
import {actionSetGameFinished} from "../ducks/gameFinishedReducer";
import {images} from "../constants/images";

let correctGuesses = 0;

export const handleLetterClick = (letter) => (dispatch, getState) => {
  const currentWord = getState().randomWord;
  const maxAttempts = images.length;
  dispatch(actionSetLetterMatched(letter));

  if(!currentWord.includes(letter)) {
    dispatch(actionSetSteps());
    dispatch(actionSetIncorrectGuesses(letter))
  } else {
    dispatch(actionSetCorrectGuesses(letter));
  }

  for (let i = 0; i < currentWord.length; i++) {
    if (currentWord[i] === letter) {
      correctGuesses++;
    }
  }

  if(correctGuesses === currentWord.replace(/\s/g, "").length || maxAttempts === getState().steps) {
    dispatch(actionSetGameFinished());
    correctGuesses = 0;
  }
};

import { actionSetGameFinished } from "../ducks/gameFinishedReducer";
import { actionClearGuesses } from "../ducks/guessesReducer";
import { actionResetSteps } from "../ducks/stepsReducer";
import { actionSetRandomWord } from "../ducks/randomWordReducer";
import { randomWord } from "../constants/randomWords";

export const handleStartAgainClick = () => (dispatch, getState) => {
    const currentWord = getState().randomWord;
    dispatch(actionClearGuesses());
    dispatch(actionSetRandomWord(randomWord()));
    if(currentWord === getState().randomWord) {
        dispatch(actionSetRandomWord(randomWord()));
    }
    dispatch(actionResetSteps());
    dispatch(actionSetGameFinished());
};

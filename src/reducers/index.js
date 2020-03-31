import {combineReducers} from "redux";
import { randomWordReducer as randomWord } from "../ducks/randomWordReducer";
import { guessesReducer as guesses } from "../ducks/guessesReducer";
import { stepsReducer as steps } from "../ducks/stepsReducer";
import { gameFinishedReducer as gameFinished } from "../ducks/gameFinishedReducer";

export const rootReducer = combineReducers({
    randomWord,
    guesses,
    steps,
    gameFinished
});

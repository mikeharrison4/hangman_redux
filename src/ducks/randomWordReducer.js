import {randomWord} from "../constants/randomWords";

const initialValue = randomWord();

export const actionSetRandomWord = (word) => ({
    type: 'SET_RANDOM_WORD',
    word
});

export const actionSetLetterMatched = (letter) => ({
   type: 'SET_LETTER_MATCHED',
   letter,
});

export const randomWordReducer = (state = initialValue, action) => {
  switch(action.type) {
      case 'SET_RANDOM_WORD':
          return action.word;
      default:
          return state;
  }
};

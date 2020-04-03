const initialValue = {
    incorrectGuesses: [],
    correctGuesses: []
};

export const actionSetCorrectGuesses = (guess) => ({
   type: 'SET_CORRECT_GUESSES',
   guess
});

export const actionSetIncorrectGuesses = (guess) => ({
    type: 'SET_INCORRECT_GUESSES',
    guess
});

export const actionClearGuesses = () => ({
    type: 'CLEAR_GUESSES',
});

export const guessesReducer = (state = initialValue, action) => {
  switch(action.type) {
      case "SET_INCORRECT_GUESSES":
          return {
              ...state,
              incorrectGuesses: state.incorrectGuesses.concat(action.guess)
            };
      case "SET_CORRECT_GUESSES":
          return {
              ...state,
              correctGuesses: state.correctGuesses.concat(action.guess)
          };
      case "CLEAR_GUESSES":
          return initialValue;
      default:
          return state;
  }
};

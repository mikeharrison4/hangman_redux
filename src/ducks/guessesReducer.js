export const actionSetGuesses = (guess) => ({
   type: 'SET_GUESSES',
   guess
});

export const actionClearGuesses = (guess) => ({
    type: 'CLEAR_GUESSES',
    guess
});

export const guessesReducer = (state = [], action) => {
  switch(action.type) {
      case "SET_GUESSES":
          return state.concat(action.guess);
      case "CLEAR_GUESSES":
          return [];
      default:
          return state;
  }
};

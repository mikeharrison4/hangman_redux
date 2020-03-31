export const actionSetGameFinished = () => ({
    type: 'SET_GAME_FINISHED',
});

export const gameFinishedReducer = (state = false, action) => {
    switch(action.type) {
        case "SET_GAME_FINISHED":
            return !state;
        default:
            return state;
    }
};

const initialSteps = 0;

export const actionSetSteps = () => ({
  type: "SET_STEPS"
});

export const actionResetSteps = () => ({
   type: "RESET_STEPS"
});

export const stepsReducer = (state = initialSteps, action) => {
    switch (action.type) {
        case "SET_STEPS":
            return state + 1;
        case "RESET_STEPS":
            return initialSteps;
        default:
            return state;
    }
};

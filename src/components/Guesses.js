import React from 'react';
import { connect } from "react-redux";
import { actionSetGameFinished } from "../ducks/gameFinishedReducer";
import { images } from "../constants/images";

const Guesses = ({ steps, actionSetGameFinished }) => {
    const maxAttempts = images.length;
    let livesRemaining = maxAttempts - steps;
    if(maxAttempts === steps) {
        actionSetGameFinished();
    }
    return (
        <div className="Guesses">
            <p>{ livesRemaining } Lives remaining</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
  steps: state.steps,
});

export default connect(mapStateToProps, { actionSetGameFinished })(Guesses);

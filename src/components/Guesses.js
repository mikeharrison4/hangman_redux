import React from 'react';
import { connect } from "react-redux";
import { actionSetGameFinished } from "../ducks/gameFinishedReducer";
import { images } from "../constants/images";

const Guesses = ({ steps }) => {
    return (
        <div className="Guesses">
            <p>{ images.length - steps } Lives remaining</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
  randomWord: state.randomWord,
  steps: state.steps,
  guesses: state.guesses,
});

export default connect(mapStateToProps, { actionSetGameFinished })(Guesses);

import React from 'react';
import KeyPad from "./KeyPad";
import WordLetters from "./WordLetters";
import Guesses from "./Guesses";
import {connect} from "react-redux";
import {handleStartAgainClick} from "../thunks/handleStartAgainClick";

const Hangman = ({ gameFinished, handleStartAgainClick }) => {
    return (
        <div className='Hangman'>
            <WordLetters />
            { gameFinished ?
                <button className="startAgain" onClick={handleStartAgainClick}>Start Again</button>
                :
                <KeyPad />
            }
            <Guesses />
        </div>
    );
};


const mapStateToProps = (state) => ({
    gameFinished: state.gameFinished,
});

export default connect(mapStateToProps, { handleStartAgainClick })(Hangman);

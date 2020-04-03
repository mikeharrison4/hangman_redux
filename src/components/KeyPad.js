import React from 'react';
import { connect } from "react-redux";
import {handleLetterClick} from "../thunks/handleLetterClick";

const KeyPad = ({ handleLetterClick, guesses }) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const listKeys = alphabet.split('').map( (letter, index) => {
       const incorrect = guesses.incorrectGuesses.includes(letter);
       const correct = guesses.correctGuesses.includes(letter);

       const disable = incorrect || correct;
       return (
           <button
            key={index}
            className={(incorrect ? 'incorrect' : null) || (correct ? 'correct' : null)}
            disabled={disable}
            onClick={() => handleLetterClick(letter)}
           >
              {letter}
           </button>
       )
    });

    return (
        <div className='Keypad'>
            { listKeys }
        </div>
    );
};

const mapStateToProps = (state) => ({
   guesses: state.guesses,
});

export default connect(mapStateToProps, { handleLetterClick })(KeyPad);

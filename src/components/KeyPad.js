import React from 'react';
import { connect } from "react-redux";
import {handleLetterClick} from "../thunks/handleLetterClick";

const KeyPad = ({ handleLetterClick, guesses }) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const listKeys = alphabet.split('').map( (letter, index) => (
        <button
            key={index}
            disabled={guesses.includes(letter)}
            onClick={() => handleLetterClick(letter)}
        >
            { letter }
        </button>
    ));

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

import React from 'react';
import { connect } from "react-redux";

const WordLetters = ({ randomWord, guesses, gameFinished }) => {
    console.log(randomWord);
    let printWord;

    printWord = randomWord.split('').map((char, index) => {
        const addChar = guesses.includes(char) ? char : null;
        let className = char !== ' ' ? 'letterHolder' : null;
        if(char === ' ') className = null;
        return gameFinished
            ?  <div key={index} className={`${className} boldize`}>{char}</div>
            : <div key={index} className={className}>{addChar}</div>;
    });

    return (
        <div className='WordLetters'>
            { printWord }
        </div>
    );
};

const mapStateToProps = (state) => ({
   randomWord: state.randomWord,
   guesses: state.guesses,
   gameFinished: state.gameFinished,
});

export default connect(mapStateToProps)(WordLetters);

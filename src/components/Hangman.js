import React, {Fragment} from 'react';
import KeyPad from "./KeyPad";
import WordLetters from "./WordLetters";
import Guesses from "./Guesses";
import {connect} from "react-redux";
import {handleStartAgainClick} from "../thunks/handleStartAgainClick";
import Confetti from 'react-dom-confetti';
import { images } from '../constants/images';

const Hangman = ({ gameFinished, handleStartAgainClick, steps }) => {
    const config = {
        angle: "93",
        spread: 45,
        startVelocity: "51",
        elementCount: 50,
        dragFriction: 0.1,
        duration: "5110",
        stagger: "15",
        width: "51px",
        height: "52px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    const gameWon = gameFinished && steps !== images.length;
    const message = gameWon ? <p>YOU WIN</p> : <p>YOU LOSE!</p>;

    return (
        <div className='Hangman'>
            <WordLetters />
            { gameFinished ?
                <Fragment>
                    { message }
                    <button className="startAgain" onClick={handleStartAgainClick}>Start Again</button>
                </Fragment>
                :
                <KeyPad />
            }
            <Confetti active={gameWon} config={config} />
            <Guesses />
        </div>
    );
};


const mapStateToProps = (state) => ({
    steps: state.steps,
    gameFinished: state.gameFinished,
});

export default connect(mapStateToProps, { handleStartAgainClick })(Hangman);

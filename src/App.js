import React from 'react';
import './App.css';
import Hangman from "./components/Hangman";
import Canvas from "./components/Canvas";

const App = () => {
  return (
    <div className="Hangman">
        <Hangman />
        <Canvas />
    </div>
  );
};

export default App;

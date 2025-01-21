import React, { useState } from "react";
import { VscDebugRestart } from "react-icons/vsc";
import "./Modal.css";

const Modal = ({
  correctLetters,
  incorrectLetters,
  restartGame,
  wordToGuess,
  gameWon,
  gameOver,
}) => {
  return (
    <div className={`modal-overlay ${gameOver ? "visible" : ""}`}>
      <div className={`modal ${gameOver ? "slide-in" : "slide-out"}`}>
        <h2>{`${gameWon ? "Round Won!" : "Game Over"}`}</h2>
        <div className="modal-text">
          <div className="text-content">The word was: {wordToGuess}</div>
          <div className="text-content">
            Correct guesses: {correctLetters.length}. Incorrect guesses:
            {incorrectLetters.length}.
          </div>
        </div>
        <button className="modal-button" onClick={restartGame}>
          <VscDebugRestart />
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default Modal;

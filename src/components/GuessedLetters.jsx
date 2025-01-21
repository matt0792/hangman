import React from "react";
import "./GuessedLetters.css";

function GuessedLetters({ correctLetters, incorrectLetters }) {
  return (
    <div className="guessed-container">
      <div className="correct-guesses">
        <h3>Correct Guesses:</h3>
        <div className="card-container">
          {/* Map correct letters to cards */}
          {correctLetters.map((letter, index) => (
            <div key={index} className="correct-card">
              {letter}
            </div>
          ))}
        </div>
      </div>
      <div className="incorrect-guesses">
        <h3>Incorrect Guesses:</h3>
        <div className="card-container">
          {/* Same logic as correct */}
          {incorrectLetters.map((letter, index) => (
            <div key={index} className="incorrect-card">
              {letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GuessedLetters;

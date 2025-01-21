import React, { useState } from "react";

const WordDisplay = ({ wordToGuess, guessedLetters }) => {
  return (
    <div className="word-display">
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className="letter">
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;

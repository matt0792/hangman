import React, { useState } from "react";
import "./Alphabet.css";

function Alphabet({ alphabet, guessedLetters, handleGuess }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatedLetter, setAnimatedLetter] = useState(null);

  // To handle letter selection
  const handleLetterClick = (letter) => {
    if (guessedLetters.includes(letter)) return;

    setIsAnimating(true);
    setAnimatedLetter(letter);

    // Delay to let animation finish
    setTimeout(() => {
      handleGuess(letter);
      setIsAnimating(false);
      setAnimatedLetter(null);
    }, 100);
  };

  // Return content
  return (
    <div className="alphabet-container">
      {/* Map alphabet to cards */}
      {alphabet.map((letter) => (
        <div
          key={letter}
          className={`letter-card ${
            guessedLetters.includes(letter) ? "guessed" : ""
          } ${isAnimating && letter === animatedLetter ? "animating" : ""}`}
          onClick={() => handleLetterClick(letter)}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}

export default Alphabet;
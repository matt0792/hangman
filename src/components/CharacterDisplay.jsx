import React, { useState } from "react";
import { FaSkull } from "react-icons/fa";

const CharacterDisplay = ({ incorrectLetters }) => {
  const maxAttempts = 10;
  const incorrectCount = incorrectLetters.length;

  // Calculate amount of greyed out letters

  return (
    <div className={`character-display ${incorrectCount >= maxAttempts ? "zoom" : ""}`}>
      <div className="skull-container">
        <div
          className={`skull ${incorrectCount >= maxAttempts ? "glow" : "greyed"}`}
        >
          <FaSkull size={50} />
        </div>
      </div>
      <div className="game-over-text">
        {"GAME_OVER".split("").map((char, index) => (
            <span
                key={index}
                className={`${incorrectCount >= index + 1 ? "glow" : "greyed"}`}>
                    {char}
            </span>
        ))}
      </div>
    </div>
  );
};

export default CharacterDisplay;

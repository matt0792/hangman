import React from "react";
import { IoMdClose } from "react-icons/io";
import "./Info.css";

const Info = ({ infoShown, hideInfo }) => {
  return (
    <div className={`info-background ${infoShown ? "visible" : ""}`}>
      <div className={`info ${infoShown ? "slide-in" : ""}`}>
        <div className="info-top">
          <h2>Help</h2>
          <IoMdClose className="info-close" onClick={hideInfo} />
        </div>
        <div className="info-header">Objective:</div>
        <div className="info-content">
          - Guess the hidden word letter by letter before making too many
          incorrect guesses.
        </div>
        <div className="info-header">GamePlay:</div>
        <div className="info-content">
          - A hidden word is indicated by blank spaces (e.g. _ _ _ _ for a 4
          letter word).
        </div>
        <div className="info-content">- Guess one letter at a time.</div>
        <div className="info-content">
          - if your guess is correct, the letter will fill in all the matching
          blanks, if not, you'll be one step closer to Game Over.
        </div>
        <div className="info-content">
          - You will lose if the Game Over text is completed, ending with the
          skull.
        </div>
        <div className="info-content">
          - Win by guessing all the letters in the hidden word.
        </div>
        <div className="info-header">Tips:</div>
        <div className="info-content">
          - Start with common vowels (A, E, I, O, U) and consonants (T, N, S,
          R).
        </div>
        <div className="info-content">
          - You can click on the "Hint" button once per round to reveal a random
          letter.
        </div>
        <div className="info-content">
          - Enter letters by clicking their respective cards, or typing on the keyboard.
        </div>
      </div>
    </div>
  );
};

export default Info;

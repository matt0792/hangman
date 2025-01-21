import React from "react";
import './Options.css'
import { VscDebugRestart } from "react-icons/vsc";
import { SlMagnifier } from "react-icons/sl";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Options = ({restartGame, hintUsed, hint, guessedLetters, showInfo}) => {
  return (
    <div className="options">
      <button className={`option-button ${guessedLetters.length >= 1 ? "" : "greyed-opt"}`} onClick={restartGame}><VscDebugRestart /> Restart</button>
      <button className={`option-button ${hintUsed ? "greyed-opt" : ""}`} onClick={hint}><SlMagnifier /> Hint</button>
      <button className={`option-button`} onClick={showInfo}><IoIosInformationCircleOutline /> Info</button>
    </div>
  );
};

export default Options;

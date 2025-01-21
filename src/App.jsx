import React, { useState, useEffect } from "react";
import Alphabet from "./components/Alphabet";
import GuessedLetters from "./components/GuessedLetters";
import GameDisplays from "./components/GameDisplays";
import Options from "./components/Options";
import Modal from "./components/Modal";
import { useFetchWord } from "./hooks/useFetchWord";
import Info from "./components/Info";
import "./App.css";

function App() {
  const [fetchTrigger, setFetchTrigger] = useState(0); // to trigger a refetch of word
  const { word } = useFetchWord(
    "https://random-word-api.herokuapp.com/word",
    fetchTrigger
  );
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // create array by splitting
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [wordToGuess, setWordToGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [infoShown, setInfoShown] = useState(false);

  const maxAttempts = 10;

  // Update wordToGuess whet the api returns a random word
  useEffect(() => {
    if (word) {
      setWordToGuess(word.toUpperCase());
    }
  }, [word]);

  useEffect(() => {
    if (incorrectLetters.length >= maxAttempts) {
      setGameOver(true);
    }
  }, [incorrectLetters]);

  const handleGuess = (letter) => {
    // Prevent guessing if game is over
    if (gameOver) return;

    // Log guessed letter
    setGuessedLetters((prev) => [...prev, letter]);

    // Check if letter is correct
    if (wordToGuess.includes(letter)) {
      setCorrectLetters((prev) => [...prev, letter]);
    } else {
      setIncorrectLetters((prev) => [...prev, letter]);
    }

    if (
      new Set(correctLetters).size + 1 >=
      new Set(wordToGuess.split("")).size
    ) {
      setGameWon(true);
      setGameOver(true);
    }
  };

  // Add keyboard support for guessing letters
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase(); 
      if (alphabet.includes(key)) {
        handleGuess(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown); 
    };
  }, [alphabet, guessedLetters, gameOver]);

  // Reset everything to restart the game
  const restartGame = () => {
    if (guessedLetters.length >= 1) {
      setGameOver(false);
      setHintUsed(false);
      setGameWon(false);
      setGuessedLetters([]);
      setCorrectLetters([]);
      setIncorrectLetters([]);
      setFetchTrigger((prev) => prev + 1);
    }
  };

  const showInfo = () => {
    setInfoShown(true);
  };

  const hideInfo = () => {
    setInfoShown(false);
  };

  const hint = () => {
    if (hintUsed || gameOver) return; // can nly use one hint

    // find letters that are both correct and unplayed
    const unguessedCorrectLetters = wordToGuess
      .split("")
      .filter(
        (letter) =>
          !guessedLetters.includes(letter) && wordToGuess.includes(letter)
      );

    // pick letter to reveal
    if (unguessedCorrectLetters.length > 0) {
      const hintLetter =
        unguessedCorrectLetters[
          Math.floor(Math.random() * unguessedCorrectLetters.length)
        ];

      // 'play' the letter
      setGuessedLetters((prev) => [...prev, hintLetter]);
      setCorrectLetters((prev) => [...prev, hintLetter]);
      setHintUsed(true);
    }
  };

  return (
    <div className="App">
      <div className="blur"></div>
      <div className="header">HANGMAN_</div>
      <GameDisplays
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        incorrectLetters={incorrectLetters}
      />
      <div className="controls">
        <Options
          restartGame={restartGame}
          hintUsed={hintUsed}
          hint={hint}
          guessedLetters={guessedLetters}
          showInfo={showInfo}
        />
        <Alphabet
          alphabet={alphabet}
          guessedLetters={guessedLetters}
          handleGuess={handleGuess}
        />
      </div>
      {/* modal for when game is over */}
      <Modal
        correctLetters={correctLetters}
        incorrectLetters={incorrectLetters}
        restartGame={restartGame}
        wordToGuess={wordToGuess}
        gameWon={gameWon}
        gameOver={gameOver}
      />
      <Info infoShown={infoShown} hideInfo={hideInfo} />
    </div>
  );
}

export default App;

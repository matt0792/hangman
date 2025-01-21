import "./GameDisplays.css";
import WordDisplay from "./WordDisplay";
import CharacterDisplay from "./CharacterDisplay";

const GameDisplays = ({ wordToGuess, guessedLetters, incorrectLetters }) => {
  return (
    <div className="game-displays">
      <div className="word-display display">
        <WordDisplay
          wordToGuess={wordToGuess}
          guessedLetters={guessedLetters}
        />
      </div>
      <div className="character-display display">
        <CharacterDisplay 
        incorrectLetters={incorrectLetters}/>
      </div>
    </div>
  );
};

export default GameDisplays;

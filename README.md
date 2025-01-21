# HANGMAN_ 

The classic word-guessing game, built with React + Vite. Features keyboard support and hints.

[![React](https://img.shields.io/badge/React-18.2-%2361DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4.4-%646CFF?logo=vite)](https://vitejs.dev/)


## Live Demo
https://matt0792.github.io/hangman_/

## Features

### Core Gameplay
- **10 Attempts** to guess the hidden word
- **Keyboard integration** (physical & on-screen)
- **Hint system** reveals one random letter

### Special Mechanics
- **Smart hint algorithm**:
  - Reveals least-guessed correct letter
  - Limited to **1 use per game**
- **Game persistence**:
  - Maintains state until refresh/restart

## 📦 Installation

1. Clone repository:
```bash
git clone https://github.com/matt0792/hangman-react.git
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

## Usage
- **Letter Input**: Click buttons or press physical keys
- **Hint**: Click hint icon (available once per game)
- **Restart**: Click restart icon at any time
- **Game Info**: Click ⓘ icon for instructions

## API Integration
Uses the [Random Word API](https://random-word-api.herokuapp.com/home) with:
- **Alternatives** (modify in `useFetchWord` hook):
  ```javascript
  // Alternative APIs
  const WORDS_API = "https://api.datamuse.com/words?sp=?????";
  const LOCAL_WORDS = ["REACT", "VITE", "HOOKS", "COMPONENT"];
  ```

## 📸 Screenshots
| ![Screenshot](/screenshots/hangman-screenshot.png) | 

## 🛠️ Technologies
- **Frontend**: React 18
- **Build Tool**: Vite 4
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Styling**: CSS Modules
- **State Management**: React Hooks

---

**Created with ♥ by Matt Thompson**  
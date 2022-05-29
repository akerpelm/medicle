import { useState, createContext, useEffect } from "react";

import "./App.css";
import Board from "./components/Board";
import GameOver from "./components/GameOver";
import Keyboard from "./components/Keyboard";
import { boardMatrix, generateWordSet } from "./components/util/boardUtil.js";

export const AppContext = createContext();

function App() {
  const wordTracker = { attempt: 0, position: 0 };

  const [board, setBoard] = useState(boardMatrix);
  const [currentAttempt, setCurrentAttempt] = useState(wordTracker);
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [usedLetters, setUsedLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameHasEnded: false,
    correctWordFound: false,
  });

  useEffect(() => {
    generateWordSet().then(({ wordSet, wordOfTheDay }) => {
      setWordSet(wordSet);
      setCorrectWord(wordOfTheDay);
    });
  }, []);

  let { attempt, position } = currentAttempt;

  const handleLetterSelect = (keyPress) => {
    if (position > 4) return;
    const currentBoardState = [...board];
    currentBoardState[attempt][position] = keyPress;
    setBoard(currentBoardState);
    setCurrentAttempt({ ...currentAttempt, position: position + 1 });
  };

  const handleDelete = () => {
    if (position === 0) return;
    const currentBoardState = [...board];
    currentBoardState[attempt][position - 1] = "";
    setBoard(currentBoardState);
    setCurrentAttempt({ ...currentAttempt, position: position - 1 });
  };

  const handleEnter = () => {
    if (position !== 5) return;

    let currentWord = "";
    for (let i = 0; i < 5; i++) {
      currentWord += board[attempt][i].toLowerCase();
    }
    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrentAttempt({
        attempt: attempt + 1,
        position: 0,
      });
    } else {
      alert("Word not found"); //toast?
    }
    if (currentWord === correctWord) {
      setGameOver({ gameHasEnded: true, correctWordFound: true });
      return;
    }
    if (attempt === 5) {
      setGameOver({ gameHasEnded: true, correctWordFound: false });
    }
    //need to largely expand word set.
  };

  return (
    <div className="App">
      <nav>
        <h1>Medicle</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          handleLetterSelect,
          handleDelete,
          handleEnter,
          correctWord,
          usedLetters,
          setUsedLetters,
          gameOver,
          setGameOver,
        }}
      >
        <div className="game-container">
          <Board />
          {gameOver.gameHasEnded ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;

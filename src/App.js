import { useState, createContext, useEffect } from "react";

import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardMatrix, generateWordSet } from "./components/util/boardUtil.js";

export const AppContext = createContext();

function App() {
  const wordTracker = { attempt: 0, position: 0 };
  const [board, setBoard] = useState(boardMatrix);
  const [currentAttempt, setCurrentAttempt] = useState(wordTracker);

  const correctWord = "RIGHT";

  useEffect(() => {
    generateWordSet().then((words) => {
      console.log(words);
    });
  }, []);
  let { attempt, position } = currentAttempt;
  const currentBoardState = [...board];

  const handleLetterSelect = (keyPress) => {
    if (position > 4) return;
    currentBoardState[attempt][position] = keyPress;
    setBoard(currentBoardState);
    setCurrentAttempt({ ...currentAttempt, position: ++position });
  };

  const handleDelete = () => {
    if (position === 0) return;
    currentBoardState[attempt][position - 1] = "";
    setBoard(currentBoardState);
    setCurrentAttempt({ ...currentAttempt, position: --position });
  };

  const handleEnter = () => {
    if (position !== 5) return;
    setCurrentAttempt({
      ...currentAttempt,
      attempt: ++attempt,
      position: 0,
    });
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
        }}
      >
        <div className="game-container">
          <Board />
          ----
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;

import { useState, createContext } from "react";

import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardMatrix } from "./components/util/boardUtil.js";

export const AppContext = createContext();

function App() {
  const wordTracker = { attempt: 0, position: 0 };
  const [board, setBoard] = useState(boardMatrix);
  const [currentAttempt, setCurrentAttempt] = useState(wordTracker);

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

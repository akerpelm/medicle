import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
  const {
    gameOver: { correctWordFound },
    currentAttempt: { attempt },
    correctWord,
  } = useContext(AppContext);
  return (
    <div className="game-over">
      <h3>{correctWordFound ? "You Win!" : "You Fail!"}</h3>
      <h1>{`The correct word was: ${correctWord}`}</h1>
      {correctWordFound && (
        <h3>You guessed the correct word in {attempt} attempts</h3>
      )}
    </div>
  );
};

export default GameOver;

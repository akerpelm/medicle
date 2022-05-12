import React, { useContext } from "react";
import { AppContext } from "../App";

const Letter = ({ position, attempt }) => {
  const {
    board,
    correctWord,
    currentAttempt: { attempt: attemptValue },
  } = useContext(AppContext);

  const letter = board[position][attempt];
  const full = correctWord[position] === letter;
  const partial = !full && letter?.length && correctWord.includes(letter);

  const letterState =
    attemptValue > attempt && (full ? "full" : partial ? "partial" : "none");

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;

import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

const Letter = ({ position, attempt }) => {
  const {
    board,
    correctWord,
    currentAttempt: { attempt: attemptValue },
    setUsedLetters,
  } = useContext(AppContext);

  const letter = board[attempt][position];

  const full = correctWord.toUpperCase()[position] === letter.toUpperCase();
  const partial =
    !full &&
    letter?.length > 0 &&
    correctWord.toUpperCase().includes(letter.toUpperCase());

  useEffect(() => {
    if (letter && !full && !partial) {
      setUsedLetters((previousState) => [...previousState, letter]);
    }
  }, [attempt]);
  const letterState = !(attemptValue > attempt)
    ? ""
    : full
    ? "full"
    : partial
    ? "partial"
    : "none";

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;

import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

const Letter = ({ position, attempt }) => {
  const { board, correctWord, currentAttempt, setUsedLetters } =
    useContext(AppContext);

  const letter = board[attempt][position];

  const full = correctWord.toUpperCase()[position] === letter.toUpperCase();
  const partial =
    !full &&
    letter !== "" &&
    correctWord.toUpperCase().includes(letter.toUpperCase());

  const letterState =
    currentAttempt.attempt > attempt &&
    (full ? "full" : partial ? "partial" : "none");

  useEffect(() => {
    if (!!letter && !full && !partial) {
      // debugger;
      setUsedLetters((previousState) => [...previousState, letter]);
    }
  }, [currentAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;

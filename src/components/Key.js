import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ input, isLargeKey, isDisabledKey }) => {
  const {
    handleLetterSelect,
    handleDelete,
    handleEnter,
    gameOver: { gameHasEnded },
  } = useContext(AppContext);

  const handleInput = () => {
    if (gameHasEnded) return;
    switch (input.toLowerCase()) {
      case "enter":
        handleEnter();
        break;
      case "delete":
        handleDelete();
        break;
      default:
        handleLetterSelect(input);
        break;
    }
  };
  return (
    <div
      className="key"
      id={isLargeKey ? "large-key" : isDisabledKey && "disabled"}
      onClick={handleInput}
    >
      {input}
    </div>
  );
};

export default Key;

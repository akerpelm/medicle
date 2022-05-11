import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ input: keyPress, isLargeKey }) => {
  const { board, setBoard, currentAttempt, setCurrentAttempt } =
    useContext(AppContext);

  const handleKeyPress = () => {
    let { attempt, position } = currentAttempt;
    const currentBoardState = [...board];

    switch (keyPress.toLowerCase()) {
      case "enter":
        if (position !== 5) return;
        setCurrentAttempt({
          ...currentAttempt,
          attempt: ++attempt,
          position: 0,
        });
        break;

      case "delete":
        if (position === 0) return;
        currentBoardState[attempt][position - 1] = "";
        setBoard(currentBoardState);
        setCurrentAttempt({ ...currentAttempt, position: --position });
        break;

      default:
        if (position > 4) return;
        currentBoardState[attempt][position] = keyPress;
        setBoard(currentBoardState);
        setCurrentAttempt({ ...currentAttempt, position: ++position });
        break;
    }
    // if (keyPress.toLowerCase() === "enter") {
    //   if (position !== 5) return;
    //   setCurrentAttempt({ ...currentAttempt, attempt: ++attempt, position: 0 });
    // } else {
    //   if (position > 4) return;

    //   currentBoardState[attempt][position] = keyPress;
    //   setBoard(currentBoardState);
    //   setCurrentAttempt({ ...currentAttempt, position: ++position });
    // }
  };
  return (
    <div
      className="key"
      id={isLargeKey && "large-key"}
      onClick={handleKeyPress}
    >
      {keyPress}
    </div>
  );
};

export default Key;

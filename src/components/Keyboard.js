import React, { useCallback, useEffect, useContext } from "react";
import { AppContext } from "../App";
import Key from "./Key";

const Keyboard = () => {
  const { handleLetterSelect, handleEnter, handleDelete, usedLetters } =
    useContext(AppContext);

  const handleKeyPressEvent = useCallback(({ key: eventKey }) => {
    switch (eventKey.toLowerCase()) {
      case "enter":
        handleEnter();
        break;
      case "backspace":
        handleDelete();
        break;
      default:
        [...keyboardLine1, ...keyboardLine2, ...keyboardLine3].forEach(
          (key) => {
            if (eventKey === key.toLowerCase()) {
              handleLetterSelect(key);
            }
          }
        );
        break;
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPressEvent);
    return () => {
      document.removeEventListener("keydown", handleKeyPressEvent);
    };
  }, [handleKeyPressEvent]);

  const keyboardLine1 = "QWERTYUIOP".split("");
  const keyboardLine2 = "ASDFGHJKL".split("");
  const keyboardLine3 = "ZXCVBNM".split("");

  return (
    <div className="keyboard" onKeyDown={handleKeyPressEvent}>
      <div className="line1">
        {keyboardLine1.map((k, idx) => {
          return (
            <div key={idx}>
              <Key input={k} isDisabledKey={usedLetters.includes(k)} />
            </div>
          );
        })}
      </div>
      <div className="line2">
        {keyboardLine2.map((k, idx) => {
          return (
            <div key={idx}>
              <Key input={k} isDisabledKey={usedLetters.includes(k)} />
            </div>
          );
        })}
      </div>
      <div className="line3">
        <Key input="Enter" isLargeKey />
        {keyboardLine3.map((k, idx) => {
          return (
            <div key={idx}>
              <Key input={k} />
            </div>
          );
        })}
        <Key input="Delete" isLargeKey />
      </div>
    </div>
  );
};

export default Keyboard;

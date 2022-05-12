import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ input: keyPress, isLargeKey }) => {
  const { handleLetterSelect, handleDelete, handleEnter } =
    useContext(AppContext);

  const handleKeyPress = () => {
    switch (keyPress.toLowerCase()) {
      case "enter":
        handleEnter();
        break;
      case "delete":
        handleDelete();
        break;
      default:
        handleLetterSelect(keyPress);
        break;
    }
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

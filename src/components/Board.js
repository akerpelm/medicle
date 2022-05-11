import React from "react";
import Letter from "./Letter";

const Board = () => {
  const lettersInWord = [0, 1, 2, 3, 4];

  const handleRowGeneration = (attempt, idx) => {
    return (
      <div className="row" key={idx}>
        <Letter position={0} attempt={attempt} />
        <Letter position={1} attempt={attempt} />
        <Letter position={2} attempt={attempt} />
        <Letter position={3} attempt={attempt} />
        <Letter position={4} attempt={attempt} />
      </div>
    );
  };

  return (
    <div className="board">
      {[0, 1, 2, 3, 4, 5].map((iteration, idx) => {
        return handleRowGeneration(iteration, idx);
      })}
    </div>
  );
};

export default Board;

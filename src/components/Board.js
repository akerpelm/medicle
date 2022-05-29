import React from "react";
import Letter from "./Letter";

const Board = () => {
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
  // return (
  //   <div className="board">
  //     <div className="row">
  //       <Letter position={0} attempt={0} />
  //       <Letter position={1} attempt={0} />
  //       <Letter position={2} attempt={0} />
  //       <Letter position={3} attempt={0} />
  //       <Letter position={4} attempt={0} />
  //     </div>
  //     <div className="row">
  //       <Letter position={0} attempt={1} />
  //       <Letter position={1} attempt={1} />
  //       <Letter position={2} attempt={1} />
  //       <Letter position={3} attempt={1} />
  //       <Letter position={4} attempt={1} />
  //     </div>
  //     <div className="row">
  //       <Letter position={0} attempt={2} />
  //       <Letter position={1} attempt={2} />
  //       <Letter position={2} attempt={2} />
  //       <Letter position={3} attempt={2} />
  //       <Letter position={4} attempt={2} />
  //     </div>
  //     <div className="row">
  //       <Letter position={0} attempt={3} />
  //       <Letter position={1} attempt={3} />
  //       <Letter position={2} attempt={3} />
  //       <Letter position={3} attempt={3} />
  //       <Letter position={4} attempt={3} />
  //     </div>
  //     <div className="row">
  //       <Letter position={0} attempt={4} />
  //       <Letter position={1} attempt={4} />
  //       <Letter position={2} attempt={4} />
  //       <Letter position={3} attempt={4} />
  //       <Letter position={4} attempt={4} />
  //     </div>
  //     <div className="row">
  //       <Letter position={0} attempt={5} />
  //       <Letter position={1} attempt={5} />
  //       <Letter position={2} attempt={5} />
  //       <Letter position={3} attempt={5} />
  //       <Letter position={4} attempt={5} />
  //     </div>
  //   </div>
  // );
};

export default Board;

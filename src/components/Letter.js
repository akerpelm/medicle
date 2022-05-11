import React, { useContext } from "react";
import { AppContext } from "../App";

const Letter = ({ position, attempt }) => {
  const { board } = useContext(AppContext);

  const letter = board[position][attempt];
  return <div>{letter}</div>;
};

export default Letter;

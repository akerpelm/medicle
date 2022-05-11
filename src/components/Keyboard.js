import React from "react";
import Key from "./Key";

const Keyboard = () => {
  const keyboardLine1 = "QWERTYUIOP".split("");
  const keyboardLine2 = "ASDFGHJKL".split("");
  const keyboardLine3 = "ZXCVBNM".split("");

  return (
    <div className="keyboard">
      <div className="line1">
        {keyboardLine1.map((k, idx) => {
          return (
            <div key={idx}>
              <Key input={k} />
            </div>
          );
        })}
      </div>
      <div className="line2">
        {keyboardLine2.map((k, idx) => {
          return (
            <div key={idx}>
              <Key input={k} />
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

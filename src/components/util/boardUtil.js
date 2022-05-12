import * as wordBank from "../../word-bank.txt";
export const boardMatrix = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  console.log(wordBank, "wb");
  let wordSet;
  await fetch(wordBank)
    .then((resp) => resp.text)
    .then((res) => {
      // console.log(res.split("\n"), "r");
      const wordArr = res.split("\n");
      wordSet = new Set(wordArr);
    });
  return { wordSet };
};

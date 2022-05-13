import wordBank from "../../word-bank.txt";
export const boardMatrix = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let wordOfTheDay;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((res) => {
      const wordArr = res.split("\n");
      wordOfTheDay = wordArr[Math.floor(Math.random() * wordArr.length)];
      console.log(wordOfTheDay);
      wordSet = new Set(wordArr);
    });
  return { wordSet, wordOfTheDay };
};

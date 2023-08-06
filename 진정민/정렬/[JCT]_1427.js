//1427 소트인사이드

let fs = require("fs");
let input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("")
  .map(Number)
  .sort((a, b) => b - a)
  .join("");

console.log(input);

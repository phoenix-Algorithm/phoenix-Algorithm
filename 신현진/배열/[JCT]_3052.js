let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let remain = input.map((v) => v % 42);

console.log([...new Set(remain)].length);

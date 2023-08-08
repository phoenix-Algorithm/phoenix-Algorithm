let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

input.shift();
let arr = [...new Set(input)];
let answer = "";

arr
  .sort()
  .sort((a, b) => a.length - b.length)
  .forEach((v) => (answer += v + "\n"));

console.log(answer);

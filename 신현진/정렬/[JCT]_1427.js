let fs = require("fs");
console.log(
  fs
    .readFileSync("./input.txt")
    .toString()
    .trim()
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("")
);

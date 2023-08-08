// 2752 세수정렬

let fs = require("fs");
let input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

input = input.sort((a, b) => {
  return a - b;
});

console.log(input.join(" "));

// 2750 수 정렬하기

let fs = require("fs");
let [N, ...arr] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

arr = arr.sort((a, b) => {
  return a - b;
});

console.log(arr.join("\n"));

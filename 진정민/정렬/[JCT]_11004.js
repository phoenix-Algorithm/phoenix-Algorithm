// 11004 K번째 수

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let A = input[0].split(" ").map(Number);
let arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => {
    return a - b;
  });

let N = A[0];
let K = A[1];

console.log(arr[K - 1]);

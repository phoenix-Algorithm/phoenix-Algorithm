// queuestack

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let N = Number(input[0]);
let A = input[1].split(" ").map(Number);
let B = input[2].split(" ").map(Number);
let M = Number(input[3]);
let C = input[4].split(" ").map(Number);

let arr = [];

for (let i = 0; i < N; i++) {
  if (A[i] === 0) {
    arr.push(B[i]);
  }
}
arr = arr.reverse();
let result = [];

for (let i = 0; i < M; i++) {
  arr.push(C[i]);
  result[i] = arr[i];
}

console.log(result.join(" "));

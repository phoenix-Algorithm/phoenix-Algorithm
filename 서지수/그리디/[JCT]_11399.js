// 1-2. ATM

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

answer = 0;
for (let i = 0; i < N; i++) {
  answer += arr[i] * (N - i);
}

console.log(answer);

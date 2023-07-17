// 1. 숫자의 합

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("input.txt").toString().split("\n");

n = Number(input[0]);
s = input[1];

answer = 0;
for (let i = 0; i < n; i++) {
  answer += Number(s[i]);
}

console.log(answer);

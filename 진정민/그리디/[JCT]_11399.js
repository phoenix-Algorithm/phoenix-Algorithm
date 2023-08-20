// 11399 : ATM
// 그냥 for문으로 쌓아가며 구할 수 있었는데
// 그냥 reduce로 풀어보고 싶어서 억지로 풀어봤습니다.

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

let answer = arr.reduce((a, b, idx, src) => a + b * (src.length - idx));
answer += arr[0] * arr.length - arr[0];

console.log(answer);

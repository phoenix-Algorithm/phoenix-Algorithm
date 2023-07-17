// 1. 합

let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin"));

let sol = 0;
for (let i = 1; i <= input; i++) {
  sol += i;
}

console.log(sol);

// 강의 정답
//  등차수열의 합 공식을 이용
console.log((input * (input + 1)) / 2);

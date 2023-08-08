// 3-3. 소트인사이드

// 나의 풀이
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

console.log(
  input[0]
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("")
);

// 강의 풀이
let n = input[0];
let cnt = Array(10).fill(0);

for (let x of n) {
  cnt[Number(x)]++;
}

let answer = "";
for (let i = 9; i >= 0; i--) {
  for (let j = 0; j < cnt[i]; j++) {
    answer += i + "";
  }
}
console.log(answer);

// 2. 수 정렬하기

// 나의 풀이
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

console.log(arr.sort((a, b) => a - b).join("\n"));

// 강의 풀이
// 동일
// 이 문제도 N이 1이상 1,000이하의 수이므로 선택 정렬로 풀이 가능

// 3-2. 나이순 정렬

// 강의 풀이
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
let arr = [];

for (let i = 1; i <= N; i++) {
  const cus = input[i].split(" ");
  arr.push([Number(cus[0]), cus[1]]);
}

arr.sort((a, b) => a[0] - b[0]);

answer = "";
for (x of arr) {
  answer += x[0] + " " + x[1] + "\n";
}
console.log(answer.trim());

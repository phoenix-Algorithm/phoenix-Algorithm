// 2-2. 좌표 정렬하기 2

// 나의 풀이
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

answer = "";
arr.map((v) => (answer += v.join(" ") + "\n"));
console.log(answer.trim());

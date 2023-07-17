// 5. 평균

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("input.txt").toString().split("\n");

const n = Number(input[0]);
const array = input[1].split(" ").map(Number);

// 최대값 구하기
let max = 0;
for (let j = 0; j < array.length; j++) {
  if (array[j] > max) {
    max = array[j];
  }
}

// 새로운 평균 구하기
newSummary = 0;
for (let j = 0; j < n; j++) {
  newSummary += (array[j] / max) * 100;
}
newAvg = newSummary / n;

console.log(newAvg);

// 강의 정답 코드
// reduce 사용
// 최대값 구하기
let maxValue = array.reduce((a, b) => Math.max(a, b));

// 새로운 평균 구하기
newArray = [];
for (let j = 0; j < n; j++) {
  newArray.push((array[j] / max) * 100);
}

console.log(newArray.reduce((a, b) => a + b) / n);

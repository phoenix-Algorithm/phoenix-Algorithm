// 1. 최소, 최대

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("input.txt").toString().split("\n");

const num = input[0];
const array = input[1].split(" ").map(Number);

console.log(Math.min(...array), Math.max(...array));

// 강의 정답 코드 1)
// 배열을 순회하면서 최대, 최소값을 찾는다.
let minValue = 1000001;
let maxValue = -1000001;

for (let i = 0; i < num; i++) {
  if (minValue > array[i]) minValue = array[i];
  if (maxValue < array[i]) maxValue = array[i];
}

console.log(minValue, maxValue);

// 강의 정답 코드 2)
// reduce와 Math.min(), max() 사용
let min = array.reduce((a, b) => Math.min(a, b));
let max = array.reduce((a, b) => Math.max(a, b));

console.log(min, max);

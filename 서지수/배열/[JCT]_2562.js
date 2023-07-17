// 2. 최댓값

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("input.txt").toString().split("\n");

const array = input.map(Number);
let maxValue = -1;
let maxIdx = -1;

for (let i = 0; i < array.length; i++) {
  if (maxValue < array[i]) {
    maxValue = array[i];
    maxIdx = i;
  }
}
console.log(maxValue);
console.log(maxIdx + 1);

// 강의 정답 코드 2)
let max = Math.max(...array);

console.log(max);
console.log(array.indexOf(max) + 1);

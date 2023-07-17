const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

const a = input[0];
const b = input[1];
const c = input[2];

let answer = 0;
let maxNum = 0;

if (a === b && a === c) {
  answer = 10000 + a * 1000;
} else if (a === b || a === c || b === c) {
  if (a === b || a === c) {
    answer = 1000 + a * 100;
  } else {
    answer = 1000 + b * 100;
  }
} else {
  maxNum = Math.max(...numbers);
  answer = maxNum * 100;
}

console.log(answer);

// 2-3. 수들의 합

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

// 내 풀이
// 틀렸습니다.
const S = Number(input[0]);
let sum = 0;
let count = 1;

while (S >= sum) {
  sum += count;
  count++;
  if (sum >= S) {
    sum -= count;
    count -= 2;
    break;
  }
}

console.log(count);

// 강의 풀이
let current = 0;

while (S >= sum) {
  current++;
  sum += current;
}

console.log(current - 1);

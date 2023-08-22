// 2-3. K번째 수

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
const k = Number(input[1]);

let start = 1;
let end = 10 ** 10;

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let i = 1; i <= N; i++) {
    total += Math.min(parsrInt(mid / i), N);
  }
  if (total >= k) {
    result = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(result);

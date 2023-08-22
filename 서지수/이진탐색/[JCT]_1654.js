// 1-3. 랜선 자르기

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const [K, N] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= K; i++) {
  arr.push(Number(input[i]));
}

let start = 1;
let end = Math.max(...arr);

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let temp = 0;
  for (x of arr) {
    temp += parseInt(x / mid);
  }
  if (temp < N) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result);

// 1-2. 나무 자르기

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let start = 0;
let end = Math.max(...arr);

let result = 0;
while (start <= end) {
  mid = parseInt((start + end) / 2);
  temp = 0;
  for (x of arr) {
    if (x > mid) {
      temp += x - mid;
    }
  }
  if (temp < M) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result);

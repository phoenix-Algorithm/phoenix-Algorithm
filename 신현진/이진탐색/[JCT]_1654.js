let fs = require("fs");
let [arr, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

arr = arr.split(" ");
input = input.map(Number);

let K = +arr[0];
let N = +arr[1];

let start = 1;
let end = Math.max(...input);
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (x of input) {
    total += parseInt(x / mid);
  }

  if (total >= N) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);

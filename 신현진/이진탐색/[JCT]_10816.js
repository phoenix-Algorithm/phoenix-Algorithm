let fs = require("fs");
let [N, card, M, int] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

card = card
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
int = int.split(" ").map(Number);
M = +M;

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countRange(arr, leftValue, rightValue) {
  let upperValue = upperBound(arr, rightValue, 0, arr.length);
  let lowerValue = lowerBound(arr, leftValue, 0, arr.length);

  return upperValue - lowerValue;
}

let answer = "";

for (let i = 0; i < int.length; i++) {
  answer += countRange(card, int[i], int[i]) + " ";
}

console.log(answer);

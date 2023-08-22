// 2-1. 숫자 카드 2

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
const numArr = input[1].split(" ").map(Number);
const M = Number(input[2]);
const MArr = input[3].split(" ").map(Number);

numArr.sort((a, b) => a - b);
const lowerBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
};

const upperBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
};

const countByRange = (arr, leftValue, rightValue) => {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let lowerIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - lowerIndex;
};

answer = "";
for (let i of MArr) {
  answer += countByRange(numArr, i, i) + " ";
}

console.log(answer.trim());

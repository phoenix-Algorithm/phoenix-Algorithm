let fs = require("fs");
let input = fs.readFileSync("index.txt").toString().split("\n");

let n = Number(input[0]);
let numberArr = input[1].split(" ").map(Number);
let m = Number(input[2]);
let foundArr = input[3].split(" ").map(Number);

numberArr.sort((a, b) => a - b);

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

let answer = [];

for (let i = 0; i < m; i++) {
  answer.push(countByRange(numberArr, foundArr[i], foundArr[i]));
}

console.log(answer.join(" "));

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

let inputArr = input[1].split(" ").map(Number);

// LIS 배열
let lis = [0];

// 이진탐색 진행
function lower(arr, x, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= x) end = mid;
    else start = mid + 1;
  }
  return end;
}

for (let x of inputArr) {
  // lis 배열의 맨 마지막 수보다 x가 크다면 lis에 x를 push (배열의 맨 마지막에 추가)
  if (lis[lis.length - 1] < x) {
    lis.push(x);
  } else {
    // x가 작다면, 최대한 옮길 수 있는 곳까지 x를 옮겨줌
    let idx = lower(lis, x, 0, lis.length);
    lis[idx] = x;
  }
}

/*const firstValue = inputArr[0];
//lis의 맨 첫 번째 값은 0이 있기 때문에
inputArr.every((v) => v === firstValue)
  ? console.log(0)
  : console.log(lis.length - 1);
  */

console.log(lis.length - 1);

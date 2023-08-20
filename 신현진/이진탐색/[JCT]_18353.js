///강의풀이
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

//순서를 뒤집어서 LIS 문제로 바꿈
arr.reverse();

//LIS 배열
//맨 처음에는 0이 들어가있음
let d = [0];

for (x of arr) {
  //마지막 원소보다 현재 원소 x가 크다면 arr의 가장 뒤에 넣기
  if (d[d.length - 1] < x) {
    d.push(x);
  } else {
    //x이하인 원소가 있다면, 가능한 왼쪽에 있는 원소와 x를 교체
    let idx = lowerBound(d, x, 0, d.length);
    d[idx] = x;
  }
}

//arr.length에서 1을 빼주는 이유? arr[0]=0을 제외시켜주기 위함
console.log(n - (d.length - 1));

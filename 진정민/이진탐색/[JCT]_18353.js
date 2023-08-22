let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

const lowerBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
};

arr.reverse();

let d = [0];
// 이진 탐색을 활용한 LIS 알고리즘 수행
for (x of arr) {
  if (d[d.length - 1] < x) {
    // 마지막 원소보다 현재 원소 x가 크다면 가장 뒤에 넣기
    d.push(x);
  } else {
    // x 이하인 원소가 있다며느 가능한 왼쪽에 있는 원소와 x를 교체
    let index = lowerBound(d, x, 0, d.length);
    d[index] = x;
  }
}

console.log(n - (d.length - 1));

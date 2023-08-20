// 정답 코드
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기
    else start = mid + 1;
  }
  return end;
}

let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
arr.reverse(); // 순서를 뒤집어 최장 증가 부분 수열(LIS) 문제로 변환
let d = [0]; // LIS 배열
// 이진 탐색을 활용한 LIS 알고리즘 수행
for (x of arr) {
  if (d[d.length - 1] < x) {
    // 마지막 원소보다 현재 원소 x가 크다면 가장 뒤에 넣기
    d.push(x);
  } else {
    // x 이하인 원소가 있다면, 가능한 왼쪽에 있는 원소와 x를 교체
    let index = lowerBound(d, x, 0, d.length);
    d[index] = x;
  }
}
// 열외해야 하는 병사의 최소 수를 출력
console.log(n - (d.length - 1));

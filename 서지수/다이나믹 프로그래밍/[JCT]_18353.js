// 4-1. 병사 배치하기

// 저번에 풀었던 코드 참고해서 풀어보려고 했는데 어렵네요
// 실버라서 풀 수 있을 줄 알았는데 아쉽네요ㅜ

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]);
let arr = input[1].split(' ').map(Number);

// 순서를 뒤집어 '최장 증가 부분 수열' 문제로 변환
arr.reverse();

// 다이나믹 프로그래밍을 위한 1차원 DP 테이블 초기화
dp = new Array(N).fill(1);

// 가장 긴 증가하는 부분 수열(LIS) 알고리즘 수행
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    // console.log('i: ', i, 'j: ', j);
    // console.log(arr[i], arr[j]);
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
// console.log(dp);

// 열외해야 하는 병사의 최소 수를 출력
console.log(N - Math.max(...dp));

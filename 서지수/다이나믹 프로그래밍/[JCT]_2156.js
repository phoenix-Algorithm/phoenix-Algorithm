// 1-3. 포도주 시식

// 강의 풀이
/*
  모든 경우의 수를 구해서 가장 큰 값을 출력하려고 했는데
  모든 경우의 수를 구하는 방법을 떠올리지 못해서 강의코드 봤습니다.
  근데 모든 경우의 수를 따져서 푸는건 다이나믹 프로그래밍으로 푼게 아니라 의미 없었을 것 같아요...
  규칙을 찾아내는게 어렵네요 많이 풀어봐야할 것 같아요
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let n = Number(input[0]);
arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}
// console.log(arr);

let dp = new Array(n).fill(0);
dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(arr[0] + arr[1], arr[0] + arr[2], arr[1] + arr[2]);
// console.log(dp);

for (let i = 3; i < n; i++) {
  // i번째 안마시기
  dp[i] = dp[i - 1];
  // i번쨰 안 마신 것과 i번째 마시고 2칸 앞에 있는 최대 포도주와 비교
  dp[i] = Math.max(dp[i], arr[i] + dp[i - 2]);
  // 이 전 연산 중 큰 값과 i번째, i-1번째 포도주 마시고 3칸 앞에 있는 포도주 마신 것과 비교
  dp[i] = Math.max(dp[i], arr[i] + arr[i - 1] + dp[i - 3]);
}

console.log(dp[n - 1]);

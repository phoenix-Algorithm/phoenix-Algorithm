// 5-1. 쉬운 계단 수

// 강의 답안 참고했습니다.ㅜ

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]);
let dp = Array.from(Array(N + 1), () => new Array(10).fill(0));

dp[1][0] = 0; // 0으로 시작하는 수는 계단수가 아님
for (let j = 1; j <= 9; j++) {
  dp[1][j] = 1;
}

// console.log(dp);

for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= 9; j++) {
    dp[i][j] = 0;
    if (j > 0) dp[i][j] += dp[i - 1][j - 1];
    if (j < 9) dp[i][j] += dp[i - 1][j + 1];
    dp[i][j] %= Number(1e9);
  }
}

// console.log(dp);

let result = 0;
for (let j = 0; j <= 9; j++) {
  result += dp[N][j];
  result %= Number(1e9);
}
console.log(result);

// 2-1. 파도반 수열

// 규칙 찾으니까 수월하게 풀리네요!

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const T = Number(input[0]);
const dp = [];
dp[0] = 1;
dp[1] = 1;
dp[2] = 1;
dp[3] = 2;
dp[4] = 2;

for (let i = 5; i <= 100; i++) {
  dp.push(dp[i - 3] + dp[i - 2]);
}

for (let t = 1; t <= T; t++) {
  console.log(dp[Number(input[t] - 1)]);
}

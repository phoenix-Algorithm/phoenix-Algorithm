const fs = require('fs');
const n = +fs.readFileSync('dev/stdin').toString().trim();

function solution(n) {
  // dp[i] : i를 1로 만드는데 필요한 최소 연산 횟수
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    // 1을 빼는 경우로 먼저 dp[i]를 초기화 해준다.
    // i-1를 1로 만드는데 필요한 최소 연산 횟수(dp[i-1])에 1를 빼주는 연산이 추가되므로 +1
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
  }

  return dp[n];
}

console.log(solution(n));

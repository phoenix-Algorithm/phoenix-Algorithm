const fs = require('fs');
const N = +fs.readFileSync('dev/stdin').toString().trim();

const MOD = 1e9;

let dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

// 초기값 설정 (길이 1)
for (let i = 1; i <= 9; i++) {
  dp[1][i] = 1;
}

// dp 테이블 채우기
for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j === 0) {
      // 끝자리가 0인 경우 그 앞자리가 1일 경우만 계단 수
      dp[i][0] = dp[i - 1][1] % MOD;
    } else if (j === 9) {
      // 끝자리가 9인 경우 그 앞자리가 8일 경우만 계단 수
      dp[i][9] = dp[i - 1][8] % MOD;
    } else {
      // 그외 (1~8)은 dp[i - 1][j - 1] 와 dp[i - 1][j + 1]의 합
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD;
    }
  }
}

let answer = dp[N].reduce((acc, val) => (acc + val) % MOD, 0);
console.log(answer);

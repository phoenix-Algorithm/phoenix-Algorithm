const fs = require('fs');
let [N, ...cost] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

N = +N;
cost = cost.map((line) => line.split(' ').map(Number));

// dp[i][j]: i번째 집을 j로 칠했을 때의 누적 최소 비용
const dp = Array.from({ length: N }, () => Array(3).fill(0));
dp[0] = cost[0];

const [R, G, B] = [0, 1, 2];

for (let i = 1; i < N; i++) {
  // i번째 집을 R로 칠할때 dp[i][R]은 i-1번째 집을 G나 B로 칠할때의 dp값 중 작은 값
  dp[i][R] = cost[i][R] + Math.min(dp[i - 1][G], dp[i - 1][B]);

  dp[i][G] = cost[i][G] + Math.min(dp[i - 1][R], dp[i - 1][B]);

  dp[i][B] = cost[i][B] + Math.min(dp[i - 1][R], dp[i - 1][G]);
}

console.log(Math.min(...dp[N - 1]));

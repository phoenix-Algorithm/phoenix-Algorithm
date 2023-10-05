const fs = require('fs');
let [T, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
T = +T;

function fibonacciCounts(N) {
  if (N === 0) return [1, 0];
  if (N === 1) return [0, 1];

  let dp = Array(N + 1)
    .fill()
    .map(() => Array(2).fill(0));
  dp[0] = [1, 0];
  dp[1] = [0, 1];

  for (let i = 2; i <= N; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
    dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
  }

  return dp[N];
}

for (let i = 0; i < T; i++) {
  const N = +input[i];
  const dp = Array(41).fill(0);

  const result = fibonacciCounts(N);

  console.log(result[0] + ' ' + result[1]);
}

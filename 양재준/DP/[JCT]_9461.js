const fs = require('fs');
let [T, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
T = +T;

function P(N) {
  if (N <= 3) return 1;

  let dp = new Array(N + 1).fill(0);
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;

  for (let i = 4; i <= N; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
  }

  return dp[N];
}

for (let i = 0; i < T; i++) {
  const N = +input[i];
  console.log(P(N));
}

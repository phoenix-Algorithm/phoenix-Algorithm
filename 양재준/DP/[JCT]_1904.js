const fs = require('fs');
let N = +fs.readFileSync('dev/stdin').toString().trim();

let dp = new Array(N + 1).fill(0);
function tileCombinations(N) {
  if (N == 1) return 1;
  if (N == 2) return 2;

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
  }

  return dp[N];
}

console.log(tileCombinations(N));

const fs = require('fs');
let [N, ...wine] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
N = +N;
wine = wine.map(Number);

let dp = Array(N + 1).fill(0);

function maxWine(wine) {
  let n = wine.length;

  dp[1] = wine[0];
  if (n > 1) dp[2] = wine[0] + wine[1];

  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(
      dp[i - 1], // i번째 마시지 않는 경우
      dp[i - 2] + wine[i - 1], // i번째 마시고 i-1 마시지 않음
      dp[i - 3] + wine[i - 2] + wine[i - 1] // i번째 i-1 마시고 i-2 마시지 않음
    );
  }

  return dp[n];
}

console.log(maxWine(wine));

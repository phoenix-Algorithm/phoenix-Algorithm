// 계단 오르기

const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

input = input.map(Number);
const n = input[0];
let dp = new Array(n + 1).fill(0);

dp[1] = input[1];
dp[2] = Math.max(input[1] + input[2], input[2]);
dp[3] = Math.max(input[1], input[2]) + input[3];

for (let i = 4; i <= n; i++) {
  dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
}

// console.log(dp);
console.log(dp[n]);

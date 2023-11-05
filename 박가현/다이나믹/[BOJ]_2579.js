const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const stairs = [];
for (let i = 1; i < input.length; i++) {
  stairs.push(Number(input[i]));
}
const n = Number(input[0]);
const dp = new Array(n).fill(0);

dp[0] = stairs[0];
dp[1] = Math.max(stairs[1], stairs[0] + stairs[1]);
dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);
for (let i = 3; i < n; i++) {
  dp[i] = Math.max(
    dp[i - 2] + stairs[i],
    stairs[i] + stairs[i - 1] + dp[i - 3]
  );
}
console.log(dp[n - 1]);

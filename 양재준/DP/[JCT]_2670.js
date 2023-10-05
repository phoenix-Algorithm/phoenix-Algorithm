const fs = require('fs');
let [n, ...nums] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
n = +n;
nums = nums.map(Number);

const dp = [];
for (let i = 0; i < n; i++) {
  dp.push(nums[i]);
}

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i], dp[i] * dp[i - 1]);
}

console.log(Math.max(...dp).toFixed(3));

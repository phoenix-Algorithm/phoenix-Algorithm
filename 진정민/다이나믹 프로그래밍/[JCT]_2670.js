// 접근 방식이 떠오르지 않아서 강의를 봤습니다.
// 아이디어가 깔끔하고 좋았습니다. dp[i]에서 최댓값을 어떻게 구하지 했는데
// 그냥 연속곱이 크면 계속해서 연속곱을 하도록 만들어서 그 중 최댓값을 구하는 방식이었네요

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let [n, ...dp] = input.map(Number);

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i], dp[i] * dp[i - 1]);
}

dp.sort((a, b) => a - b);
console.log(dp[dp.length - 1].toFixed(3));

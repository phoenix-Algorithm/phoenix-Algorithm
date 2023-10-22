//강의답안 봄
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n").map(Number);

let n = input[0];

//잔 안에 담긴 포도주의 양
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}

//최댓값
let dp = new Array(n).fill(0);

dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(arr[0] + arr[1], arr[1] + arr[2], arr[0] + arr[2]);

for (let i = 3; i < n; i++) {
  //i번째 안마시기
  dp[i] = dp[i - 1];
  //i번째 마셨으면 i번째 있는 양 (arr[i]) 더해줌

  //i번째 마시고 i-1번째 안마시면 -> dp[i-2]
  dp[i] = Math.max(dp[i], arr[i] + dp[i - 2]);

  //연속으로 3개를 마시는건 불가능
  //i번째 마시고 i-1번째 마심 + i-2번째 못마심 +i-3번째 마심
  dp[i] = Math.max(dp[i], arr[i] + arr[i - 1] + dp[i - 3]);
}

console.log(dp[n - 1]);

//계단 오르기
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, ...arr] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
//n= 계단의 개수, 1~300까지 가능

let dp = [];
dp[0] = arr[0];
dp[1] = Math.max(arr[0] + arr[1], arr[1]);
dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);

for (let i = 3; i < n; i++) {
  //마지막칸의 전전칸일 때와 마지막 칸의 전 칸 일때를 비교
  dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i]);
}

console.log(n == 1 ? arr[0] : dp[n - 1]);

// 예전에 풀었던 것 같은데
// 강의 아이디어까지 보고 풀었습니다

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number).reverse();

let dp = new Array(n + 1).fill(1);

dp[0] = 1;

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}

console.log(n - Math.max(...dp));

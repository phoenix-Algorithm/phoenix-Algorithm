//쉬운 계단 수
//강의답안 봄
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let n = +fs.readFileSync(path).toString().trim();

//dp[i][j] -> i: 길이, j:마지막에 끝나는 숫자
let dp = Array.from(Array(n + 1), () => new Array(10).fill(0));
dp[1][0] = 0;

//길이가 1이면 계단수도 1개
for (let j = 1; j <= 9; j++) {
  dp[1][j] = 1;
}

for (let i = 2; i <= n; i++) {
  for (let j = 0; j <= 9; j++) {
    //j가 0일때, 9일때, 그 외(0보다 크고 9보다 클 때)
    if (j === 0) dp[i][0] = dp[i - 1][j + 1];
    else if (j === 9) dp[i][9] = dp[i - 1][j - 1];
    else dp[i][j] = dp[i - 1][j + 1] + dp[i - 1][j - 1];

    dp[i][j] %= Number(1e9);
  }
}

let result = 0;
for (let j = 0; j <= 9; j++) {
  result += dp[n][j];
  result %= Number(1e9);
}

console.log(result);

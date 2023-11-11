//1,2,3 더하기
//실버3
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n").map(Number);

let tc = input.shift();

let dp = new Array(12).fill(0);
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < 12; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

for (let i = 0; i < tc; i++) {
  let goal = input[i];
  console.log(dp[goal]);
}

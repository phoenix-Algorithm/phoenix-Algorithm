//동전 2
//답안 봄
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let coninsWorth = new Set();
for (let i = 1; i <= n; i++) {
  if (Number(input[i] <= k)) {
    coninsWorth.add(Number(input[i]));
  }
}

//dp의 각 인덱스 = 가치
//각 인덱스의 값  = 동전 개수
let dp = new Array(10001).fill(9999999);
dp[0] = 0;

coninsWorth.forEach((v) => {
  for (let i = v; i <= k; i++) {
    dp[i] = Math.min(dp[i], dp[i - v] + 1);
  }
});

//console.log(dp);

console.log(dp[k] == 9999999 ? -1 : dp[k]);

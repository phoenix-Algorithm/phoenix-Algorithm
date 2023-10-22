// 2-2. 정수 삼각형

// 엄청 오래 풀었는데 결국 못 풀어서
// 답안 봤습니다ㅜㅡㅜ
// 위에 값 더해서 가장 큰 값 계속 만들어 나가는 걸 생각 못했네요

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const n = Number(input[0]);
const dp = [];

for (let i = 1; i <= n; i++) {
  dp.push(input[i].split(' ').map(Number));
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    // console.log(dp[i][j]);
    let upLeft = 0;
    if (j !== 0) upLeft = dp[i - 1][j - 1];

    let upRight = 0;
    if (j !== i) upRight = dp[i - 1][j];

    dp[i][j] += Math.max(upLeft, upRight);
  }
}

console.log(Math.max(...dp[n - 1]));

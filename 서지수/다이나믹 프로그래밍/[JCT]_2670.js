// 3-1. 연속부분최대곱

/* 
거의 비슷하게 왔는데 아쉬워요ㅜ
Math.max 이용하면 다음 값 곱한게 크면 계속 이어지고 
다음 값 곱한 게 작으면 끊기는 아이디어를 생각 못했네요
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]);

let dp = [];

for (let i = 1; i <= N; i++) {
  dp.push(parseFloat(input[i]));
}

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(dp[i], dp[i - 1] * dp[i]);
}
console.log(Math.max(...dp).toFixed(3));

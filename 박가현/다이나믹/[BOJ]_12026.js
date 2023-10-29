const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const N = parseInt(input[0]);
const road = input[1].split('');

let dp = new Array(N).fill(Infinity);
dp[0] = 0;

for (let i = 1; i < N; i++) {
  if (road[i] === 'B') {
    for (let j = 0; j < i; j++) {
      if (road[j] === 'J' && dp[j] !== Infinity) {
        dp[i] = Math.min(dp[i], dp[j] + Math.pow(i - j, 2));
      }
    }
  } else if (road[i] === 'O') {
    for (let j = 0; j < i; j++) {
      if (road[j] === 'B' && dp[j] !== Infinity) {
        dp[i] = Math.min(dp[i], dp[j] + Math.pow(i - j, 2));
      }
    }
  } else {
    // road[i] === 'J'
    for (let j = 0; j < i; j++) {
      if (road[j] === 'O' && dp[j] !== Infinity) {
        dp[i] = Math.min(dp[i], dp[j] + Math.pow(i - j, 2));
      }
    }
  }
}

console.log(dp[N - 1] === Infinity ? -1 : dp[N - 1]);

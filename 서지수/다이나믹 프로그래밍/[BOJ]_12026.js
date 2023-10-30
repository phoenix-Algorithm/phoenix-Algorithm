// BOJ 거리
// 다이나믹 프로그래밍 문제가 많았네요
// 좀 오래 걸렸지만 풀어서 신났네요...ㅎ

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]);
const str = input[1];
const MAX = 10000000000000000;
let dp = Array.from(new Array(N + 1), () => MAX);
dp[0] = 0;

const alpha = v => {
  switch (v) {
    case 'B':
      return 'O';
    case 'O':
      return 'J';
    case 'J':
      return 'B';
  }
};

for (let now = 0; now < N - 1; now++) {
  for (let next = now + 1; next < N; next++) {
    // console.log('now: ', now, 'next: ', next);
    // console.log(str[now], str[next], '/', alpha(str[now]));

    if (str[next] === alpha(str[now])) {
      dp[next] = Math.min(dp[next], dp[now] + (next - now) * (next - now));
    }
  }
}

if (dp[N - 1] === MAX) {
  console.log(-1);
} else {
  console.log(dp[N - 1]);
}

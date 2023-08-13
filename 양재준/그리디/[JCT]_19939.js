const fs = require('fs');
let [N, K] = fs.readFileSync('dev/stdin').toString().split(' ').map(Number);

// N:6, K:3 일때
// 1 2 3
// N:7, K:3 일때
// 1 2 3+1
// N:8, K:3 일때
// 1 2+1 4+1
// N:9, K:3 일때
// 1+1 2+1 3+1

// N이 K의 배수이면 연속된 개수로 분배
// N이 K의 배수가 아니면 나머지를 1씩 분배
// 그러다 나머지가 0이 될때 N은 K의 배수가 됨

// 1. 1부터 K까지의 합이 N보다 작으면 -1
// 2. N이 K의 배수이면 K-1
// 3. N이 K의 배수가 아니면 K
function solution(N, K) {
  if (N < (K * (K + 1)) / 2) return -1;
  return N % K === 0 ? K - 1 : K;
}

console.log(solution(N, K));

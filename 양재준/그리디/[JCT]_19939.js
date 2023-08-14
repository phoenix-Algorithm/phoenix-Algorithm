const fs = require('fs');
let [N, K] = fs.readFileSync('dev/stdin').toString().split(' ').map(Number);

// N:6, K:3 일때
// 1 2 3
// => 2
// N:7, K:3 일때
// 1 2 4
// => 3
// N:8, K:3 일때
// 1 3 4
// => 3
// N:9, K:3 일때
// 2 3 4
// => 2

function solution(N, K) {
  const sum = (K * (K + 1)) / 2;
  if (N < sum) return -1;
  N -= sum; // 이미 담은 공의 개수를 뺀 나머지 공의 개수를 계산
  return N % K === 0 ? K - 1 : K; // 남은 공을 바구니에 분배
}

console.log(solution(N, K));

/* 강의 풀이 */
/* let summary = 0;
for (let i = 1; i < K + 1; i++) {
  summary += i;
}
if (summary > N) {
  console.log(-1);
} else {
  N -= summary;
  if (N % K === 0) {
    console.log(K - 1);
  } else {
    console.log(K);
  }
}
 */

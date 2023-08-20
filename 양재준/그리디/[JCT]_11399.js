const fs = require('fs');
let [N, P] = fs.readFileSync('dev/stdin').toString().split('\n');
P = P.split(' ').map((el) => Number(el.trim()));

// 총 걸리는 시간
// p1
// p1 + p2
// p1 + p2 + p3
// p1 + p2 + p3 + p4
// p1 + p2 + p3 + p4 + p5
// => p1 * 5 + p2 * 4 + p3 * 3 + p4 * 2 + p5 * 1
// p1이 최소값일때 총 걸리는 시간이 최소

P.sort((a, b) => a - b);

let totalP = 0;
for (let i = 0; i < N; i++) {
  totalP = totalP + P[i] * (N - i);
}

console.log(totalP);

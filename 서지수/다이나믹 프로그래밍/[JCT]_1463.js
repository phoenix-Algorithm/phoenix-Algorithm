// 4-2. 1로 만들기

// 강의 답안 참고했습니다

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]);

// 10 -> 5 -> 4 -> 2 -> 1
// 10 -> 9 -> 3 -> 1

let d = new Array(N + 1).fill(0);

for (let x = 2; x <= N; x++) {
  d[x] = d[x - 1];
  if (x % 2 === 0) {
    d[x] = Math.min(d[x], d[parseInt(x / 2)]);
  }
  if (x % 3 === 0) {
    d[x] = Math.min(d[x], d[parseInt(x / 3)]);
  }
  d[x]++;
}

// console.log(d);
console.log(d[N]);

// 1-2. 01타일

/*
  처음에 규칙 찾는게 어려워서 강의 답안 봤는데
  생각보다 쉬운 문제였네요... 그림그려보면서 규칙을 찾아야겠네요
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let N = Number(input[0]);
d = new Array(1000001).fill(0);
d[1] = 1;
d[2] = 2;

for (let i = 3; i <= N; i++) {
  d[i] = (d[i - 2] + d[i - 1]) % 15746;
}

console.log(d[N]);

// 3-2. 극장 좌석

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]);
const M = Number(input[1]);

let d = new Array(50).fill(0);
d[0] = 1;
d[1] = 1;
d[2] = 2;

const dp = x => {
  if (d[x] != 0) return d[x];
  d[x] = dp(x - 1) + dp(x - 2);
  return d[x];
};

let arr = [];
let start = 0;
for (let i = 2; i < M + 2; i++) {
  end = Number(input[i]);
  arr.push(end - 1 - start);
  start = end;
}
arr.push(N - start);

// 각 묶음의 개수에 대하여 DP 테이블의 값 가져오기
let res = 1;
for (let x of arr) res *= dp(x);
console.log(res);

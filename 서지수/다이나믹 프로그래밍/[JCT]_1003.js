// 1-1. 피보나치 함수

/* 
  처음에 왜 arr[n-1], arr[n]을 출력하는지
  이해안갔는데 정답 코드 전에 보여준 문제 해결 아이디어 콘솔에 찍어보니 이해가 가네용...
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let T = Number(input[0]);
let line = 1;

let arr = new Array(40).fill(0);
arr[0] = 0;
arr[1] = 1;

for (let i = 2; i <= 40; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}

while (T--) {
  const n = Number(input[line]);
  if (n === 0) {
    console.log(1, 0);
  } else {
    console.log(arr[n - 1], arr[n]);
  }
  line++;
}

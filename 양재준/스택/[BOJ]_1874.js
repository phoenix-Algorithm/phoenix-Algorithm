let fs = require('fs');
let [N, ...input] = fs
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map((v) => Number(v.trim()));

let stack = [];
let result = [];

let pushCnt = 0;
let answer = '';
for (let i = 0; i < N; i++) {
  // 비교 대상 숫자
  let num = input.shift();
  while (pushCnt < num) {
    answer += '+' + '\n';
    // pushCnt 1씩 증가시켜가며 stack에 push 해줌
    stack.push(++pushCnt);
  }

  // stack에서 pop한 값과 대상 숫자 값이 같지 않을 경우 수열을 만들수 없으므로 break
  if (stack.pop() !== num) {
    answer = 'NO';
    break;
  }
  answer += '-' + '\n';
}

console.log(answer);

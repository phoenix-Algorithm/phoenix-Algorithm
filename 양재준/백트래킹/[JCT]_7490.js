const fs = require('fs');
let [caseNum, ...cases] = fs.readFileSync('dev/stdin').toString().split('\n');

caseNum = Number(caseNum);
cases = cases.map(Number);

let answer = '';
for (let i = 0; i < caseNum; i++) {
  const N = cases[i];
  solution(1, 2, N);
  answer += '\n';
}

function solution(acc, n, limit) {
  // 누적된 식 + 연산자 + current
  let current = n;
  let next = n + 1;

  if (n > limit) {
    let sum = eval(acc.replace(/ /g, '')); // 공백 없애주고 eval로 값 계산
    if (sum === 0) answer += acc + '\n';
    return;
  }

  // 모든 경우에 대한 연산식을 얻기 위해 각각의 연산자에 대해 재귀함수를 호출
  solution(acc + ' ' + current, next, limit);
  solution(acc + '+' + current, next, limit);
  solution(acc + '-' + current, next, limit);
}

console.log(answer);

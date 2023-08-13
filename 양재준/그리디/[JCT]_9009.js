const fs = require('fs');
let [N, ...input] = fs.readFileSync('dev/stdin').toString().split('\n').map(Number);

function findFiboSequence(target) {
  let fiboArr = [0, 1];

  // target보다 작은 피보나치 수열을 구한다.
  while (fiboArr.at(-1) <= target) {
    let fiboNum = fiboArr.at(-2) + fiboArr.at(-1);
    fiboArr.push(fiboNum);
  }

  let selectedFibo = [];
  let i = -1;
  // fiboArr의 뒤에서부터 target보다 작은 수를 찾아서 selectedFibo에 넣고 target에서 빼준다.
  // target이 0이 될 때까지 반복한다.
  while (true) {
    if (fiboArr.at(i) <= target) {
      selectedFibo.push(fiboArr.at(i));
      target -= fiboArr.at(i);
    }
    if (target === 0) break;

    i--;
  }

  return selectedFibo;
}

let answer = '';
for (let i = 0; i < N; i++) {
  let target = input[i];
  let fiboSequence = findFiboSequence(target);
  while (fiboSequence.length) {
    answer += fiboSequence.pop() + ' ';
  }
  answer += '\n';
}

console.log(answer.trim());

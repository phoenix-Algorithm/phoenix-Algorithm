let fs = require('fs');
let input = fs
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map((v) => v.trim().split(' '));

// 수열의 크기
const M = Numbr(input[3]);
// 수열
const C = input[4].map((v) => Number(v));
// 스택큐 크기
const N = Number(input[0]);
const isQue = input[1];

// 스택큐에서 자료구조가 큐인 데이터만 가져옴
const Que = input[2].reduce(function (acc, cur, idx) {
  if (isQue[idx] == '0') acc.push(Number(cur));
  return acc;
}, []);

let answer = '';

// 큐를 뒤집고 수열C를 붙인 다음 C의 길이 M개를 자름
console.log(...Que.reverse().concat(C).slice(0, M));

/*
1. 스택큐의 각각 스택과 큐의 원소가 하나뿐이기 때문에,
큐의 경우 원래 들어가있던 원소가 pop(들어가 있던 원소와 교환)되고, 스택은 들어갔던 값이 그대로 pop 됩니다.
2. 따라서 스택 자료구조는 결과값에 영향을 주지 않기에 입력받은 스택큐에서 스택부분은 지워버립니다.
3. 큐만 남은 스택큐에 수열 C를 push 해주고 C의 길이 만큼 pop해주면 됩니다. (저는 큐를 뒤집은 다음 C를 붙여주고 앞에서 M개 만큼 잘랐습니다.)
*/

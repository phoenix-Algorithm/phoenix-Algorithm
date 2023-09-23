const fs = require('fs');
let [s, t] = fs.readFileSync('dev/stdin').toString().split(' ').map(Number);

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

// 최대 최소 값
const min = 1;
const max = 10e9;

// 연산자 정의 '*', '+', '-', '/' 순서
const operator1 = (num) => num * num;
const operator2 = (num) => num + num;
const operator3 = (num) => 0; // 의미있는 연산자인지?
const operator4 = (num) => 1;
// 범위를 벗어나는지 체크
const possible = (num) => min <= num && num <= max;

let minLength = 0;
const answer = [];
function bfs(s, t) {
  if (s === t) return 0;
  const queue = new Queue();
  const visited = new Set();
  queue.enqueue({
    num: s,
    operator: '',
  });

  visited.add(s);

  while (queue.getLength() != 0) {
    const { num, operator } = queue.dequeue();
    if (num === t) {
      // 최소 연산 횟수일때 정답 배열에 연산자를 push
      const operatorLength = operator.length;
      minLength = minLength === 0 ? operatorLength : Math.min(minLength, operatorLength);
      if (operatorLength <= minLength) {
        answer.push(operator);
      }
    }

    // 연산자 순회하면서 조건에 맞을 경우 enqueue
    [operator1, operator2, operator3, operator4].forEach((op, index) => {
      const nextNum = op(num);
      if (possible(nextNum) && !visited.has(nextNum)) {
        queue.enqueue({
          num: nextNum,
          operator: operator + ['*', '+', '-', '/'][index],
        });
        visited.add(nextNum);
      }
    });
  }

  // 바꿀수 없는 경우 -1 return
  if (answer.length == 0) return -1;
  // 바꿀수 있는 경우 1 return
  else return 1;
}

const result = bfs(s, t);

if (result <= 0) console.log(result);
else console.log(answer.sort().shift());

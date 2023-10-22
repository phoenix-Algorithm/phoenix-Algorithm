// 2-2. 4연산

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  // 원소 삽입
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  // 원소 삭제
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  // 원소 조회
  peek() {
    return this.items[this.headIndex];
  }
  // 큐 길이 구하기
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let [s, t] = input[0].split(' ').map(Number);

if (s === t) {
  console.log(0);
} else {
  let queue = new Queue();
  queue.enqueue(['', s]);

  let visited = new Set([s]);

  let flag = false;

  while (queue.getLength() != 0) {
    let [string, num] = queue.dequeue();
    if (num > 1e9) continue;
    if (num === t) {
      console.log(string);
      flag = true;
      break;
    }
    for (let oper of ['*', '+', '-', '/']) {
      let nextValue = num;
      if (oper === '*') nextValue *= num;
      if (oper === '+') nextValue += num;
      if (oper === '-') nextValue -= num;
      if (oper === '/') nextValue = 1;
      if (!visited.has(nextValue)) {
        queue.enqueue([string + oper, nextValue]);
        visited.add(nextValue);
      }
    }
  }

  if (!flag) {
    console.log(-1);
  }
}

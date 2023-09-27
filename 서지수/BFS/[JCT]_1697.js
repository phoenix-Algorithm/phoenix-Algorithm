// 1-1. 숨바꼭질

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

const [N, K] = input[0].split(' ').map(Number);

let visited = new Set();
let queue = new Queue();
queue.enqueue([0, N]);
visited.add(N);

while (queue.getLength() !== 0) {
  let [time, now] = queue.dequeue();

  if (now == K) {
    console.log(time);
    break;
  }

  const arr = [-1, 1, 2];
  for (let i of arr) {
    const func = x => {
      if (x >= 0 && x <= 100000) {
        if (!visited.has(x)) {
          visited.add(x);
          queue.enqueue([time + 1, x]);
        }
      }
    };

    if (i === -1) {
      func(now - 1);
    } else if (i === 1) {
      func(now + 1);
    } else if (i === 2) {
      func(now * 2);
    }
  }
}

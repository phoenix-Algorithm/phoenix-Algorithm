const fs = require('fs');
const [N, K] = fs.readFileSync('dev/stdin').toString().split(' ').map(Number);

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

const visited = Array(100001).fill(false);

// 방문하지 않았고, 유효한 범위 내에 있을때 enqueue
const possible = (value) => !visited[value] && 0 <= value && value <= 100000;

function bfs(N, K) {
  const queue = new Queue();
  // 좌표 값과 cost를 enqueue
  queue.enqueue({
    position: N,
    cost: 0,
  });

  while (queue.getLength() != 0) {
    const { position, cost } = queue.dequeue();

    // 좌표가 K이면 cost를 return
    if (position === K) return cost;

    visited[position] = true;

    // enqueue 할때 cost를 누적해서 증가시켜준다
    if (possible(position - 1)) queue.enqueue({ position: position - 1, cost: cost + 1 });
    if (possible(position + 1)) queue.enqueue({ position: position + 1, cost: cost + 1 });
    if (possible(position * 2)) queue.enqueue({ position: position * 2, cost: cost + 1 });
  }
}
console.log(bfs(N, K));

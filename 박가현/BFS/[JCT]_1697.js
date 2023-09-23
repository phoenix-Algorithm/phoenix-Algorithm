// 정답 코드
let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
const MAX = 100001;
let [n, k] = input[0].split(' ').map(Number); // 초기 위치(N)와 동생의 위치(K)
let visited = new Array(MAX).fill(0); // 각 위치까지의 최단 시간
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
function bfs() {
  // 너비 우선 탐색(BFS)
  queue = new Queue();
  queue.enqueue(n);
  while (queue.getLength() != 0) {
    let currentValue = queue.dequeue();
    if (currentValue === k) {
      return visited[currentValue];
    }
    for (let c of [currentValue - 1, currentValue + 1, currentValue * 2]) {
      if (c < 0 || c >= MAX) continue;
      if (visited[c] === 0) {
        visited[c] = visited[currentValue] + 1;
        queue.enqueue(c);
      }
    }
  }
}
console.log(bfs());

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
let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
const [n, m, k, x] = input[0].split(' ').map(Number);
const graph = [];
for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  if (graph[a] === undefined) {
    graph[a] = [];
  }
  if (graph[b] === undefined) {
    graph[b] = [];
  }
  graph[a].push(b);
}
const visited = new Array(n + 1).fill(false);
const num = new Array(n + 1).fill(0);
const answer = [];
function bfs() {
  // 너비 우선 탐색(BFS)
  queue = new Queue();
  queue.enqueue(x);
  while (queue.getLength() != 0) {
    let currentValue = queue.dequeue();
    visited[currentValue] = true;
    if (num[currentValue] === k) {
      answer.push(currentValue);
    }
    for (let c of graph[currentValue]) {
      if (visited[c]) continue;
      visited[c] = true;
      num[c] = num[currentValue] + 1;
      queue.enqueue(c);
    }
  }
}
bfs();
if (answer.length === 0) {
  console.log(-1);
} else {
  console.log(answer.sort((a, b) => a - b).join('\n'));
}

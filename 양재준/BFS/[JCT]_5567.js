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

const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = +input[0];
const m = +input[1];

const graph = Array(n + 1)
  .fill()
  .map(() => []);
const visited = Array(n + 1).fill(false);
for (let i = 0; i < m; i++) {
  const [a, b] = input[i + 2].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let count = 0;
function bfs(start) {
  const queue = new Queue();
  visited[start] = true;
  queue.enqueue({
    node: start,
    depth: 0,
  });

  while (queue.getLength() != 0) {
    const { node, depth } = queue.dequeue();

    if (0 < depth && depth <= 2) {
      count++;
    } else if (depth > 2) {
      return;
    }

    for (let friend of graph[node]) {
      if (visited[friend]) continue;

      visited[friend] = true;
      queue.enqueue({
        node: friend,
        depth: depth + 1,
      });
    }
  }
}

bfs(1);
console.log(count);

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
let [NKM, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const [N, K, M] = NKM.split(' ').map(Number);

const visited = Array(N + M + 1).fill(false);
// 1 ~ N : 노드, N + 1 ~ N + M : 하이퍼튜브
const graph = Array(N + M + 1)
  .fill()
  .map(() => []);

for (let i = 0; i < M; i++) {
  const data = input[i].split(' ').map(Number);
  for (const node of data) {
    const hyperTube = N + 1 + i;
    graph[node].push(hyperTube);
    graph[hyperTube].push(node);
  }
}

let minCost = Infinity;
function bfs(start) {
  const queue = new Queue();
  visited[start] = true;
  queue.enqueue({
    node: start,
    cost: 1,
  });

  while (queue.getLength() != 0) {
    const { node, cost } = queue.dequeue();

    if (node === N) {
      minCost = Math.min(minCost, Math.ceil(cost / 2));
      return minCost;
    }

    for (let x of graph[node]) {
      if (visited[x]) continue;

      visited[x] = true;
      queue.enqueue({
        node: x,
        cost: cost + 1,
      });
    }
  }
}

bfs(1);
console.log(minCost === Infinity ? -1 : minCost);

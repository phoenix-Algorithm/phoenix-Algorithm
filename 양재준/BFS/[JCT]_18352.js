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
const [N, M, K, X] = input[0].trim().split(' ').map(Number);

const graph = Array(N + 1)
  .fill()
  .map(() => []);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].trim().split(' ').map(Number);
  graph[a].push(b);
}

const visited = Array(N + 1).fill(false);
let answer = [];
function bfs(start) {
  const queue = new Queue();
  visited[X] = true;
  // 도시와 거리 enqueue
  queue.enqueue({
    city: start,
    cost: 0,
  });

  while (queue.getLength() != 0) {
    const { city, cost } = queue.dequeue();

    // 거리가 K 일때 정답 배열에 push, K초과 일때는 체크할 필요가 없으므로 return
    if (cost === K) answer.push(city);
    if (cost > K) return;

    for (let nextCity of graph[city]) {
      if (!visited[nextCity]) {
        visited[nextCity] = true;
        queue.enqueue({
          city: nextCity,
          cost: cost + 1,
        });
      }
    }
  }
}

bfs(X);
if (answer.length === 0) console.log(-1);
else {
  answer.sort((a, b) => a - b);
  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }
}

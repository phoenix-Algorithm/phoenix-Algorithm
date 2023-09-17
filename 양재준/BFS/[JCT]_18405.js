const fs = require('fs');
let [NK, ...graph] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const [N, K] = NK.trim().split(' ').map(Number);
const [S, X, Y] = graph.pop().trim().split(' ').map(Number);
graph = graph.map((el) => el.trim().split(' ').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

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

const initVirus = Array(K + 1)
  .fill()
  .map(() => []);

const visited = Array.from(Array(N), () => Array(N).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 0) continue;
    initVirus[graph[i][j]].push([i, j]);
  }
}

function bfs() {
  const queue = new Queue();
  for (let i = 1; i <= K; i++) {
    for (const [a, b] of initVirus[i]) {
      queue.enqueue({
        virus: i,
        position: [a, b],
        time: 0,
      });
      visited[a][b] = true;
    }
  }

  while (queue.getLength() != 0) {
    const { virus, position, time } = queue.dequeue();
    const [x, y] = position;
    if (time === S) return;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx > N - 1 || ny < 0 || ny > N - 1) continue;
      if (!visited[nx][ny] && (graph[nx][ny] == 0 || virus < graph[nx][ny])) {
        queue.enqueue({
          virus: virus,
          position: [nx, ny],
          time: time + 1,
        });
        graph[nx][ny] = virus;
        visited[nx][ny] = true;
      }
    }
  }
}

bfs();
console.log(graph[X - 1][Y - 1]);

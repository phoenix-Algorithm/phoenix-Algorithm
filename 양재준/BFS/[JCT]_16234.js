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
let [NLR, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const [N, L, R] = NLR.split(' ').map(Number);
const graph = input.map((el) => el.split(' ').map((el) => Number(el)));

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

function bfs(x, y, index, union) {
  let united = [[x, y]];
  let q = new Queue();
  q.enqueue([x, y]);
  union[x][y] = index;
  let summary = graph[x][y];
  let cnt = 1;

  while (q.getLength() != 0) {
    let [x, y] = q.dequeue();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (0 <= nx && nx < N && 0 <= ny && ny < N && union[nx][ny] == -1) {
        let dif = Math.abs(graph[nx][ny] - graph[x][y]);
        if (L <= dif && dif <= R) {
          q.enqueue([nx, ny]);
          union[nx][ny] = index;
          summary += graph[nx][ny];
          cnt += 1;
          united.push([nx, ny]);
        }
      }
    }
  }
  for (let unit of united) {
    let [i, j] = unit;
    graph[i][j] = parseInt(summary / cnt);
  }
}

let totalCount = 0;
while (true) {
  let union = Array.from(Array(N), () => Array(N).fill(-1));
  let index = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (union[i][j] == -1) {
        bfs(i, j, index, union);
        index++;
      }
    }
  }
  if (index == N * N) break;
  totalCount += 1;
}
console.log(totalCount);

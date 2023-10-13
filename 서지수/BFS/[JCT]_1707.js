// 2-1. 이분 그래프

// 강의 코드 참고

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

// 미방문: -1, 빨강: 0, 파랑: 1

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let K = Number(input[0]);
let line = 1;

const bfs = (x, graph, visited) => {
  let queue = new Queue();
  queue.enqueue(x);
  visited[x] = 0;
  while (queue.getLength() != 0) {
    x = queue.dequeue();
    for (let y of graph[x]) {
      // 방문하지 않았다면
      if (visited[y] === -1) {
        visited[y] = (visited[x] + 1) % 2; // 빨강 <-> 파랑
        queue.enqueue(y);
      }
    }
  }
};

const isBipartite = (graph, visited) => {
  for (let x = 1; x < visited.length; x++) {
    for (let y of graph[x]) if (visited[x] === visited[y]) return false;
  }
  return true;
};

while (K--) {
  // 정점의 개수: V, 간선의 개수: E
  let [V, E] = input[line++].split(' ').map(Number);
  let graph = [];
  for (let i = 1; i <= V; i++) {
    graph[i] = [];
  }
  while (E--) {
    const [u, v] = input[line++].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }
  // console.log(graph);

  let visited = new Array(V + 1).fill(-1);
  for (let i = 1; i <= V; i++) {
    if (visited[i] === -1) bfs(i, graph, visited);
  }

  // console.log(visited);
  if (isBipartite(graph, visited)) console.log('YES');
  else console.log('NO');
}

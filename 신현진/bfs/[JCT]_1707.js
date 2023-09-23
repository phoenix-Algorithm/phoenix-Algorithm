//강의답안 봄
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let tc = +input[0];
let line = 1;

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
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

function bfs(x, graph, visited) {
  queue = new Queue();
  queue.enqueue(x);
  visited[x] = 0;
  while (queue.getLength() != 0) {
    x = queue.dequeue();
    for (let y of graph[x]) {
      if (visited[y] == -1) {
        //visited[x]=0이면 visited[y]=1, visited[x]=1이면 visited[y]=0
        visited[y] = (visited[x] + 1) % 2;
        queue.enqueue(y);
      }
    }
  }
}

function isBipartite(graph, visited) {
  for (let x = 1; x < visited.length; x++) {
    for (let y of graph[x]) if (visited[x] == visited[y]) return false;
  }
  return true;
}

while (tc--) {
  let [v, e] = input[line].split(" ").map(Number);

  // 그래프 만들기
  let graph = [];
  for (let i = 1; i <= v; i++) graph[i] = [];
  for (let i = 1; i <= e; i++) {
    let [a, b] = input[line + i].split(" ").map(Number);
    graph[a].push([b]);
    graph[b].push([a]);
  }

  // 방문 조회를 위한 배열, -1이면 방문하지 않음
  let visited = new Array(v + 1).fill(-1);

  for (let i = 1; i <= v; i++) {
    if (visited[i] == -1) bfs(i, graph, visited);
  }

  // 다음 테스트케이스 진행
  line += e + 1;

  console.log(isBipartite(graph, visited) ? "YES" : "NO");
}

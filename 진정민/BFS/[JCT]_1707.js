let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let t = Number(input[0]);
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
  peek() {
    return this.items[this.headIndex];
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
      if (visited[y] == 0) {
        // 이거 아이디어 기발하다 생각했습니다.
        visited[y] = (visited[x] + 1) % 2;
        queue.enqueue(y);
      }
    }
  }
}

function isTwo(graph, visited) {
  for (let i = 0; i < graph.length; i++) {
    for (let x of graph[i]) if (visited[i] == visited[x]) return false;
  }
  return true;
}

while (t--) {
  let [v, e] = input[line++].split(" ").map(Number);
  let graph = [];
  for (let i = 0; i < v; i++) {
    graph[i] = [];
  }
  for (let i = 0; i < e; i++) {
    let [x, y] = input[line++].split(" ").map(Number);
    graph[x - 1].push(y - 1);
    graph[y - 1].push(x - 1);
  }

  let visited = new Array(v + 1).fill(-1);

  for (let i = 0; i < v; i++) {
    if (visited[i] == -1) bfs(i, graph, visited);
  }

  if (isTwo(graph, visited)) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

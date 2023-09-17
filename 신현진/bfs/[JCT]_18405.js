let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

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

let [n, k] = input[0].split(" ").map(Number);
//그래프
let graph = [];
let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];
/*
for (let i = 0; i < n; i++) {
  graph[i] = input[i + 1].split(" ").map(Number);
}
console.log(graph);
let [s, x, y] = input[n + 1].split(" ").map(Number);

let queue = new Queue();
let visited = new Array(n).fill(false);

function bfs(graph, x, y) {
  queue.enqueue([x, y]);
  while (queue.getLength() != 0) {
    for (let j = 1; j <= k; j++) {
      let [cx, cy] = queue.dequeue();
      if (graph[cx][cy] == j) {
        visited[cx][cy] = true;

        for (let i = 0; i < 3; i++) {
          let nx = x + dx[i];
          let ny = y + dy[i];
          if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
          if (!visited[nx][ny]) {
            graph[nx][ny] = j;
            queue.enqueue([nx, ny]);
          }
        }
      }
      console.log(graph);
    }
  }
}

bfs(graph, 0, 0);*/

//바이러스 정보
let data = [];

for (let i = 0; i < n; i++) {
  graph.push(input[i + 1].split(" ").map(Number));
  for (let j = 0; j < n; j++) {
    //해당하는 위치에 바이러스가 존재한다면
    if (graph[i][j] != 0) {
      //바이러스 종류, 시간, x, y 삽입
      data.push([graph[i][j], 0, i, j]);
    }
  }
}

data.sort((a, b) => a[0] - b[0]);
queue = new Queue();
for (let x of data) {
  queue.enqueue(x);
}

let [ts, tx, ty] = input[n + 1].split(" ").map(Number);

while (queue.getLength() != 0) {
  let [virus, s, x, y] = queue.dequeue();
  //s초가 지나도 while탈출
  if (s == ts) break;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (0 <= nx && nx < n && 0 <= ny && ny < n) {
      if (graph[nx][ny] == 0) {
        graph[nx][ny] = virus;
        queue.enqueue([virus, s + 1, nx, ny]);
      }
    }
  }
}

console.log(graph[tx - 1][ty - 1]);

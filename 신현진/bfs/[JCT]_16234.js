let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(path).toString().trim().split("\n");

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

let [n, l, r] = input[0].split(" ").map(Number);

let dx = [0, 0, -1, 1];
let dy = [1, -1, 0, 0];
let graph = [];
for (let i = 1; i <= n; i++) {
  let row = input[i].split(" ").map(Number);
  graph.push(row);
}
let totalCount = 0;

/*
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

let count = 0;
let visited = [];
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));

function bfs() {
  count++;
  queue = new Queue();
  queue.enqueue([0, 0]);

  while (queue.getLength() != 0) {
    let [x, y] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx > n || ny < 0 || ny > n) continue;
      if (!visited[nx][ny]) {
        if (
          Math.abs(arr[x][y] - arr[nx][ny]) >= l &&
          Math.abs(arr[x][y] - arr[nx][ny]) <= r
        ) {
          queue.enqueue([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j]) sum += arr[i][j];
    }
  }
  let isTrue = visited.flat().filter((v) => v == true).length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j]) arr[i][j] = parseInt(sum / isTrue);
    }
  }

  return arr;
}
console.log(bfs());*/

function bfs(x, y, idx, union) {
  let united = [[x, y]];
  let q = new Queue();
  q.enqueue([x, y]);
  union[x][y] = idx;
  let sum = graph[x][y];
  //연합 국가 수
  let cnt = 1;

  while (q.getLength() != 0) {
    let [x, y] = q.dequeue();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (0 <= nx && nx < n && 0 <= ny && ny < n && union[nx][ny] == -1) {
        let dif = Math.abs(graph[nx][ny] - graph[x][y]);
        if (l <= dif && dif <= r) {
          q.enqueue([nx, ny]);
          union[nx][ny] = idx; //연합에 추가
          sum += graph[nx][ny];
          cnt += 1;
          united.push([nx, ny]);
        }
      }
    }
  }
  //인구분배
  for (let unit of united) {
    let [i, j] = unit;
    graph[i][j] = parseInt(sum / cnt);
  }
}

while (true) {
  let union = Array.from(Array(n), () => Array(n).fill(-1));
  let idx = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (union[i][j] == -1) {
        bfs(i, j, idx, union);
        idx++;
      }
    }
  }
  if (idx == n * n) break;
  totalCount += 1;
}

console.log(totalCount);

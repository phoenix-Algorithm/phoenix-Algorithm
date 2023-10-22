// 미로 탐색
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

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = [[]];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = input[i].trim("\r").split("").map(Number);
}

let visited = [];
for (let i = 0; i < n; i++) {
  visited.push(new Array(m).fill(0));
}

let queue = new Queue();
let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];

function bfs(x, y) {
  queue.enqueue([x, y]);
  visited[x][y] = 1;

  while (queue.getLength() != 0) {
    let [x, y] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < m &&
        visited[nx][ny] == 0 &&
        arr[nx][ny] == 1
      ) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }
  return visited[n - 1][m - 1];
}

console.log(bfs(0, 0));

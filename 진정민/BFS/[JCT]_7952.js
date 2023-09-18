let fs = require("fs");
let input = fs.readFileSync("dev/stdin.txt").toString().split("\n");

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

let dx = [-2, -2, -1, -1, 1, 1, 2, 2];
let dy = [-1, 1, -2, 2, -2, 2, -1, 1];

function BFS() {}

while (t--) {
  let I = Number(input[line++]);

  let [x, y] = input[line++].split(" ").map(Number);
  let [targetx, targety] = input[line++].split(" ").map(Number);
  let visited = [];

  for (let i = 0; i < I; i++) {
    visited.push(new Array(I).fill(0));
  }

  //bfs
  queue = new Queue();
  queue.enqueue([x, y]);
  visited[x][y] = 1;
  while (queue.getLength() != 0) {
    let current = queue.dequeue();
    x = current[0];
    y = current[1];
    for (let i = 0; i < 8; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= I || ny < 0 || ny >= I) continue;
      if (visited[nx][ny] == 0) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }

  console.log(visited[targetx][targety] - 1);
}

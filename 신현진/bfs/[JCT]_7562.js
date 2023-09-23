//강의답안 봄
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
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let tc = +input[0];
let dx = [-2, -2, -1, -1, 1, 1, 2, 2];
let dy = [-1, 1, -2, 2, -2, 2, -1, 1];

/*let line1 = 0;
let line2 = 1;
let line3 = 2;

let dx = [-2, -2, -1, -1, 1, 1, 2, 2];
let dy = [-1, 1, -2, 2, -2, 2, -1, 1];

function bfs(l, x, y, tx, ty) {
  
}

for (let i = 0; i < tc; i++) {
  let l = Number(input[line1]);
  let [x, y] = input[line2].split(" ").map(Number);
  let [tx, ty] = input[line3].split(" ").map(Number);

  console.log(bfs(l, x, y, tx, ty));
  line1 += 3;
  line2 += 3;
  line3 += 3;
}*/

let line = 1;

while (tc--) {
  let l = Number(input[line]);
  let [x, y] = input[line + 1].split(" ").map(Number);
  let [tx, ty] = input[line + 2].split(" ").map(Number);
  let visited = [];

  for (let i = 0; i < l; i++) {
    visited.push(new Array(l).fill(0));
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

      if (nx < 0 || nx >= l || ny < 0 || ny >= l) continue;
      if (visited[nx][ny] == 0) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }
  line += 3;
  console.log(visited[tx][ty] - 1);
}

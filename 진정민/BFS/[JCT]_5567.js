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

let fs = require("fs");
let input = fs.readFileSync("dev/stdin.txt").toString().split("\n");

let n = Number(input[0]);
let m = Number(input[1]);

let graph = [];

for (let i = 0; i <= n; i++) {
  graph[i] = [];
}

for (let i = 0; i < m; i++) {
  let [x, y] = input[i + 2].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let visited = new Array(n + 1).fill(false);

let queue = new Queue();
queue.enqueue([0, 1]);

let answer = [];

while (queue.getLength() != 0) {
  let [t, x] = queue.dequeue();

  if (t == 2) break;

  visited[x] = true;
  for (let y of graph[x]) {
    if (!visited[y]) {
      answer.push(y);
      queue.enqueue([t + 1, y]);
    }
  }
}

answer = [...new Set(answer)];

console.log(answer.length);

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

let n = +input[0];
let m = +input[1];

let graph = [];
for (let i = 0; i <= n; i++) {
  graph[i] = [];
}
for (let i = 2; i <= m + 1; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let visited = new Array(n + 1).fill(false);
let count = 0;

function bfs() {
  queue = new Queue();
  queue.enqueue(1);

  while (queue.getLength() != 0) {
    let current = queue.dequeue();
    visited[current] = true;
    count++;

    if (current == 1 || graph[1].includes(current)) {
      for (let x of graph[current]) {
        if (!visited[x]) {
          queue.enqueue(x);
          visited[x] = true;
        }
      }
    }
  }
}

bfs();
console.log(count - 1);

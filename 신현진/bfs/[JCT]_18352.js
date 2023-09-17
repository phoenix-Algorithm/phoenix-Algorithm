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
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let [n, m, k, x] = input[0].split(" ").map(Number);
let length = new Array(n + 1).fill(-1);
length[x] = 0;

let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
}

let queue = new Queue();
queue.enqueue(x);
//큐가 빌 때까지 반복
while (queue.getLength() != 0) {
  let current = queue.dequeue();

  for (let next of graph[current]) {
    if (length[next] == -1) {
      length[next] = length[current] + 1;
      queue.enqueue(next);
    }
  }
}

let check = false;
for (let i = 1; i <= n; i++) {
  if (length[i] == k) {
    console.log(i);
    check = true;
  }
}

if (!check) console.log(-1);

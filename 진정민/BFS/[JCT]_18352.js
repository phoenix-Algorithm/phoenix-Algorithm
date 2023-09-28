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
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let [n, m, k, x] = input[0].split(" ").map(Number);
let graph = [];
let data = [];

for (let i = 0; i < n; i++) {
  graph[i] = [];
}

for (let i = 0; i < m; i++) {
  let [x, y] = input[i + 1].split(" ").map(Number);
  graph[x - 1].push(y - 1);
}

let visited = new Array(n + 1).fill(false);

let isAnswered = false;

queue = new Queue();
queue.enqueue([0, x - 1]);

let answer = [];

while (queue.getLength() != 0) {
  let [t, x] = queue.dequeue();

  if (t == k && visited[x] != true) {
    answer.push(x + 1);
    isAnswered = true;
  }

  // 메모리 초과가 나다가 방문처리 해주니 해결됨
  if (visited[x]) {
    continue;
  }

  visited[x] = true;

  for (let s of graph[x]) {
    queue.enqueue([t + 1, s]);
  }
}

if (isAnswered) {
  answer.sort((a, b) => a - b);
  console.log(answer.join("\n"));
} else {
  console.log(-1);
}

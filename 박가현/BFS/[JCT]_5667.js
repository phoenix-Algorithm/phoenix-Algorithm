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
let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
let n = Number(input[0]);
let m = Number(input[1]);
const MAX = 100001;
let visited = new Array(n + 1).fill(0);

let graph = [];
for (let i = 2; i < input.length; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  if (!graph[a]) graph[a] = [];
  if (!graph[b]) graph[b] = [];
  graph[a].push(b);
  graph[b].push(a);
}

function bfs() {
  queue = new Queue();
  queue.enqueue(1);
  count = 0;
  visited[1] = 1;
  while (queue.getLength() != 0) {
    let currentValue = queue.dequeue();
    if (visited[currentValue] === 3) {
      return count;
    }
    if (graph[currentValue]) {
      for (let c of graph[currentValue]) {
        if (visited[c] === 0) {
          visited[c] = visited[currentValue] + 1;
          count++;
          queue.enqueue(c);
        }
      }
    }
  }
  return count;
}
console.log(bfs());

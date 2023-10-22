let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let [a, b] = fs.readFileSync(path).toString().trim().split(" ").map(Number);

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

/*
let max = 1e9;
let visited = new Array(max).fill(0);

function bfs() {
  queue = new Queue();
  queue.enqueue(a);

  while (queue.getLength() != 0) {
    let current = queue.dequeue();
    if (current == b) return visited[current] + 1;
    for (let next of [current * 2, parseInt(current.toString() + "1")]) {
      //벗어날 경우에는 무시
      if (next > max) continue;
      if (visited[next] == 0) {
        visited[next] = visited[current] + 1;
        queue.enqueue(next);
      }
    }
  }
}
let result = bfs();
console.log(result == undefined ? -1 : result);*/

let queue = new Queue();
queue.enqueue([a, 0]); //[값, 최소 연산 횟수]
let visited = new Set();
let found = false;

while (queue.getLength() != 0) {
  let [value, dist] = queue.dequeue();
  if (value > 1e9) continue;
  if (value == b) {
    console.log(dist + 1);
    found = true;
    break;
  }
  for (let oper of ["*", "+"]) {
    let nextValue = value;
    if (oper == "*") nextValue *= 2;
    if (oper == "+") {
      nextValue *= 10;
      nextValue += 1;
    }
    if (!visited.has(nextValue)) {
      queue.enqueue([nextValue, dist + 1]);
      visited.add(nextValue);
    }
  }
}

if (!found) console.log(-1);

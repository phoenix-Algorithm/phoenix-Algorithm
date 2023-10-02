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

let [a, b] = input[0].split(" ").map(Number);

let visited = new Set();
let valued = false;

let queue = new Queue();
queue.enqueue([1, a]);

while (queue.getLength() != 0) {
  let [dist, now] = queue.dequeue();

  if (now > 1e9) continue;

  if (now == b) {
    console.log(dist);
    valued = true;
    break;
  }

  for (let x of ["+", "*"]) {
    let current = now;
    if (x == "+") {
      current *= 2;
    }
    if (x == "*") {
      current *= 10;
      current += 1;
    }
    if (!visited.has(current)) {
      queue.enqueue([dist + 1, current]);
      visited.add(current);
    }
  }
}

if (!valued) console.log(-1);

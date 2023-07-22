let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  push(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  pop() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  front() {
    return this.items[this.headIndex];
  }
  back() {
    return this.items[this.tailIndex - 1];
  }
  size() {
    return this.tailIndex - this.headIndex;
  }
  empty() {
    return this.size() === 0 ? 1 : 0;
  }
}

let num = input.shift();
let queue = new Queue();
let answer = [];

for (let i = 0; i < num; i++) {
  if (input[i].includes("push")) {
    let num = input[i].split(" ");
    queue.push(Number(num[1]));
  } else if (input[i].includes("pop")) {
    answer.push(queue.size() !== 0 ? queue.pop() : -1);
  } else if (input[i].includes("size")) {
    answer.push(queue.size());
  } else if (input[i].includes("empty")) {
    answer.push(queue.empty());
  } else if (input[i].includes("front")) {
    answer.push(queue.size() !== 0 ? queue.front() : -1);
  } else if (input[i].includes("back")) {
    answer.push(queue.size() !== 0 ? queue.back() : -1);
  }
}

console.log(answer.join("\n"));

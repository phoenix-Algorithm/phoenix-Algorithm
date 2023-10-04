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

const fs = require('fs');
let [A, B] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
const set = new Set();

let minCount = Infinity;
function bfs() {
  const queue = new Queue();
  queue.enqueue({
    num: B,
    count: 0,
  });

  while (queue.getLength() > 0) {
    const { num, count } = queue.dequeue();

    if (num === A) {
      minCount = Math.min(count, minCount);
    }

    if (num % 10 === 1 && !set.has(parseInt(num / 10))) {
      const n = parseInt(num / 10);
      set.add(n);
      queue.enqueue({
        num: n,
        count: count + 1,
      });
    }
    if (num % 2 === 0 && !set.has(parseInt(num / 2))) {
      const n = num / 2;
      set.add(n);
      queue.enqueue({
        num: n,
        count: count + 1,
      });
    }
  }
}
bfs();
console.log(minCount === Infinity ? -1 : minCount + 1);

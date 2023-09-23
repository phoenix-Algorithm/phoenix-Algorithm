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
const k = input[0].split(' ').map(Number)[1];
const n = input[0].split(' ').map(Number)[0];
const a = input[input.length - 1].split(' ').map(Number);
const s = a[0];
const x = a[1];
const y = a[2];
let array = [];
const MAX = n + 1;
queue = new Queue();
let queueArray = [];
for (let i = 1; i <= n; i++) {
  array[i] = [];
  for (let j = 1; j <= n; j++) {
    array[i][j] = input[i].split(' ').map(Number)[j - 1];
    if (array[i][j] !== 0) {
      queueArray.push({ v: array[i][j], location: [i, j] });
    }
  }
}
queueArray.sort((a, b) => a.v - b.v);
for (let el of queueArray) {
  queue.enqueue(el.location);
}
let second = 0;
const handleLocation = (x, y) => {
  return [
    [x + 1, y],
    [x, y + 1],
    [x - 1, y],
    [x, y - 1],
  ];
};
function bfs() {
  while (second < s) {
    const currentValueArray = [];
    while (queue.getLength() !== 0) {
      currentValueArray.push(queue.dequeue());
    }
    for (let currentValue of currentValueArray) {
      for (let c of handleLocation(currentValue[0], currentValue[1])) {
        let [cx, cy] = c;
        if (cx <= 0 || cx >= MAX || cy <= 0 || cy >= MAX) continue;
        if (array[cx][cy] === 0) {
          array[cx][cy] = array[currentValue[0]][currentValue[1]];
          queue.enqueue([cx, cy]);
        }
      }
    }
    second++;
  }
}
bfs();
console.log(array[x][y]);

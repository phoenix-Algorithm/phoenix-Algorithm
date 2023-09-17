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
let [s, t] = fs.readFileSync(path).toString().trim().split(' ').map(Number);
const MAX = 1000000001;
const array = (c) => {
  if (c !== 0) {
    return [
      { v: c * c, sign: '*' },
      { v: c + c, sign: '+' },
      { v: c - c, sign: '-' },
      { v: c / c, sign: '/' },
    ];
  }
  return [
    { v: c * c, sign: '*' },
    { v: c + c, sign: '+' },
    { v: c - c, sign: '-' },
  ];
};
if (s === t) console.log(0);
else {
  function bfs() {
    // 너비 우선 탐색(BFS)
    queue = new Queue();
    queue.enqueue(s);
    let visited = []; // 각 위치까지의 최단 시간
    visited[s] = '';

    while (queue.getLength() != 0) {
      let currentValue = queue.dequeue();

      if (currentValue === t) {
        return visited[currentValue];
      }
      for (let c of array(currentValue)) {
        if (c.v < 0 || c.v >= MAX) continue;
        if (visited[c.v] === undefined) {
          visited[c.v] = visited[currentValue] + c.sign;
          queue.enqueue(c.v);
        }
      }
    }
  }
  const answer = bfs();
  if (answer === undefined) console.log(-1);
  else {
    console.log(answer);
  }
}

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

let index = 1;
let testCase = Number(input[0]);

const MAX = 300300;
const array = (start) => {
  const [a, b] = start;
  return [
    [a - 2, b - 1],
    [a - 2, b + 1],
    [a - 1, b - 2],
    [a - 1, b + 2],
    [a + 1, b - 2],
    [a + 1, b + 2],
    [a + 2, b - 1],
    [a + 2, b + 1],
  ];
};
function bfs(start, end, n) {
  // 너비 우선 탐색(BFS)
  queue = new Queue();
  queue.enqueue(start);
  let visited = new Array(MAX).fill(0); // 각 위치까지의 최단 시간

  while (queue.getLength() != 0) {
    let currentValue = queue.dequeue();

    let currentIndex = currentValue[0] * n + currentValue[1];
    if (currentValue[0] === end[0] && currentValue[1] === end[1]) {
      return visited[currentIndex];
    }
    for (let c of array(currentValue)) {
      if (c[0] < 0 || c[0] >= n || c[1] < 0 || c[1] >= n) continue;
      let index = c[0] * n + c[1];
      if (visited[index] === 0) {
        visited[index] = visited[currentIndex] + 1;
        queue.enqueue(c);
      }
    }
  }
}
for (let i = 0; i < testCase; i++) {
  let n = Number(input[index++]);
  let start = input[index++].split(' ').map(Number);
  let end = input[index++].split(' ').map(Number);
  console.log(bfs(start, end, n));
}

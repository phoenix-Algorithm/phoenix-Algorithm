// 1-2. 나이트의 이동

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  // 원소 삽입
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  // 원소 삭제
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  // 원소 조회
  peek() {
    return this.items[this.headIndex];
  }
  // 큐 길이 구하기
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const dx = [-2, -2, -1, 1, 2, 2, 1, -1];
const dy = [-1, 1, 2, 2, 1, -1, -2, -2];

let line = 1;
let testCase = Number(input[0]);
while (testCase--) {
  const l = Number(input[line]);
  // const arr = Array.from(new Array(l), () => new Array(l).fill(0));
  const [sx, sy] = input[line + 1].split(' ').map(Number);
  const [ex, ey] = input[line + 2].split(' ').map(Number);

  const queue = new Queue();
  queue.enqueue([sx, sy, 0]);

  const visited = Array.from(new Array(l), () => new Array(l).fill(false));
  visited[sx][sy] = true;

  while (queue.getLength() !== 0) {
    const [x, y, count] = queue.dequeue();
    if (x === ex && y === ey) {
      console.log(count);
    }

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < l && ny >= 0 && ny < l) {
        if (!visited[nx][ny]) {
          queue.enqueue([nx, ny, count + 1]);
          visited[nx][ny] = true;
        }
      }
    }
  }

  line += 3;
}

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
let [NM, ...maze] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const [N, M] = NM.split(' ').map(Number);
maze = maze.map((line) => line.split('').map(Number));

function minStepsToExit(N, M, maze) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  const queue = new Queue();

  queue.enqueue({ x: 0, y: 0, steps: 1 });
  visited[0][0] = true;

  while (queue.getLength() != 0) {
    const { x, y, steps } = queue.dequeue();

    if (x === N - 1 && y === M - 1) {
      return steps;
    }

    for (let i = 0; i < 4; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];

      if (newX >= 0 && newX < N && newY >= 0 && newY < M && maze[newX][newY] === 1 && !visited[newX][newY]) {
        queue.enqueue({ x: newX, y: newY, steps: steps + 1 });
        visited[newX][newY] = true;
      }
    }
  }
}

const result = minStepsToExit(N, M, maze);
console.log(result);

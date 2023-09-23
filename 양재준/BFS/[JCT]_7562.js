const fs = require('fs');
let [T, ...input] = fs.readFileSync('dev/stdin').toString().split('\n');
T = Number(T);

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

const coordinate = [
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
];

let index = 0;

const possible = (a, b, l) => {
  if (a < 0 || a >= l || b < 0 || b >= l) return false;
  return true;
};
function bfs(start, end, visited, l) {
  const [endX, endY] = end;
  const queue = new Queue();
  // 좌표 값과 cost를 enqueue
  queue.enqueue({
    position: start,
    cost: 0,
  });

  // 시작점 방문처리
  visited[start[0]][start[1]] = true;

  while (queue.getLength() != 0) {
    const { position, cost } = queue.dequeue();
    const [x, y] = position;

    if (x === endX && y === endY) return cost;

    for (let newCoordinate of coordinate) {
      // 이동할 방향
      const nx = x + newCoordinate[0];
      const ny = y + newCoordinate[1];

      // 이동이 가능한지 체크
      if (possible(nx, ny, l) && !visited[nx][ny]) {
        queue.enqueue({
          position: [nx, ny],
          cost: cost + 1,
        });
        // 방문처리
        visited[nx][ny] = true;
      }
    }
  }
}

for (let i = 0; i < T; i++) {
  const l = +input[index];
  const start = input[index + 1].split(' ').map(Number);
  const end = input[index + 2].split(' ').map(Number);
  const visited = Array.from(Array(l), () => Array(l).fill(false));

  console.log(bfs(start, end, visited, l));

  index += 3;
}

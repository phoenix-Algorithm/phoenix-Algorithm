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
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const [robotX, robotY, initialDirection] = input[1].split(' ').map(Number);
const room = input.slice(2).map((line) => line.split(' ').map(Number));

function cleanRoom(N, M, robotX, robotY, initialDirection, room) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const cleaned = Array.from({ length: N }, () => Array(M).fill(false));

  let count = 0;

  const queue = new Queue();
  queue.enqueue({ x: robotX, y: robotY, direction: initialDirection });

  while (queue.getLength() != 0) {
    const { x, y, direction } = queue.dequeue();

    // 현재 칸을 청소하고 카운트
    if (!cleaned[x][y]) {
      cleaned[x][y] = true;
      count++;
    }

    let found = false;

    for (let i = 0; i < 4; i++) {
      const newDirection = (direction + 3 - i) % 4;
      const newX = x + dx[newDirection];
      const newY = y + dy[newDirection];

      // 다음 칸이 유효하고 청소할 수 있는 칸인지 확인
      if (newX >= 0 && newX < N && newY >= 0 && newY < M && !cleaned[newX][newY] && room[newX][newY] === 0) {
        queue.enqueue({ x: newX, y: newY, direction: newDirection });
        found = true;
        break;
      }
    }

    // 만약 유효한 칸을 찾지 못하면 후진
    if (!found) {
      const backwardDirection = (direction + 2) % 4;
      const newX = x + dx[backwardDirection];
      const newY = y + dy[backwardDirection];

      // 후진할 수 있는지 확인
      if (newX >= 0 && newX < N && newY >= 0 && newY < M && room[newX][newY] === 0) {
        queue.enqueue({ x: newX, y: newY, direction });
      } else {
        // 로봇이 갇혔으므로 작업 종료
        break;
      }
    }
  }

  return count;
}

const result = cleanRoom(N, M, robotX, robotY, initialDirection, room);
console.log(result);

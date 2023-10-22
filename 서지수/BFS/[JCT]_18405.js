// 3-1. 경쟁적 전염

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

const [N, K] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(' ').map(Number));
}
const [S, X, Y] = input[N + 1].split(' ').map(Number);

// 참고 후에 visited는 필요없이 0이면 방문하지 않은 것이라 삭제
// let visited = Array.from(new Array(N), () => new Array(N).fill(false));
let data = []; // 참고 후 추가
let time = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] !== 0) {
      data.push([i, j, arr[i][j], 0]);
    }
  }
}

// 참고 후 추가
data.sort((a, b) => a[2] - b[2]);
let queue = new Queue();
for (let x of data) {
  queue.enqueue(x);
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

while (queue.getLength() !== 0) {
  let [x, y, virus, time] = queue.dequeue();
  // console.log('time: ', time, 'virus: ', virus, arr);

  if (time === S) break;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
      if (arr[nx][ny] === 0) {
        arr[nx][ny] = virus;
        queue.enqueue([nx, ny, virus, time + 1]);
      }
    }
  }
}

console.log(arr[X - 1][Y - 1]);

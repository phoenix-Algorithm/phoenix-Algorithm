//토마토
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
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

let [m, n] = input[0].split(" ").map(Number);

//arr 만들기
let box = new Array(n);
for (let i = 0; i < n; i++) {
  box[i] = input[i + 1].split(" ").map(Number);
}

let visited = Array.from(Array(n), () => Array(m).fill(false));

let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];

let days = 0;

// 시작 위치 찾기
let startLocations = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (box[i][j] == 1) {
      startLocations.push([i, j]);
    }
  }
}

let queue = new Queue();

//왼쪽이 세로, 오른쪽이 가로 좌표값을 의미
// 모든 시작 위치를 큐에 추가
for (let [startY, startX] of startLocations) {
  queue.enqueue([startY, startX]);
}

while (queue.getLength() != 0) {
  let currentLevelSize = queue.getLength();

  for (let k = 0; k < currentLevelSize; k++) {
    let [y, x] = queue.dequeue();

    visited[y][x] = true;

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (
        nx < 0 ||
        nx >= m ||
        ny < 0 ||
        ny >= n ||
        visited[ny][nx] ||
        box[ny][nx] == -1
      )
        continue;

      if (box[ny][nx] == 0) {
        box[ny][nx] = 1;
        queue.enqueue([ny, nx]);
      }
    }
  }

  days++; // 하루가 지남
}

// 모든 토마토가 익었는지 확인
if (box.flat().indexOf(0) !== -1) {
  console.log(-1); // 아직 익지 않은 토마토가 남아있음
} else if (
  box.filter((v) => v == -1).length + box.filter((v) => v == 1).length ==
  n * m
) {
  console.log(0);
} else {
  console.log(days - 1);
}

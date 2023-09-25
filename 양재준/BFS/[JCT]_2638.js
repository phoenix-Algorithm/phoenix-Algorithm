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
let [NM, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const [N, M] = NM.split(' ').map(Number);

const graph = input.map((el) => el.split(' ').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function possible(nx, ny) {
  if (nx < 0 || nx >= N || ny < 0 || ny >= M) return false;
  return true;
}
// 외부 공기를 찾는 함수
// 맨 가장자리는 치즈가 놓이지 않으므로 (0,0)부터 시작하여 이웃인 공기들은 모두 외부 공기
let isOutSideAir;
function findOutSideAir() {
  isOutSideAir = Array.from(Array(N), () => Array(M).fill(false));
  const queue = new Queue();
  queue.enqueue([0, 0]);

  while (queue.getLength() != 0) {
    const [x, y] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 범위를 벗어나지 않고, 공기이며 방문하지 않았을때
      if (possible(nx, ny) && graph[nx][ny] === 0 && !isOutSideAir[nx][ny]) {
        isOutSideAir[nx][ny] = true;
        queue.enqueue([nx, ny]);
      }
    }
  }
}

// 치즈를 녹이는 함수
// 전체 graph를 순회하면서 치즈이면서 두 면이상이 외부 공기로 둘러쌓인 치즈를 meltTarget에 push
// 이후 meltTarget을 순회하면서 치즈를 녹임
// meltTarget.length => 녹인 치즈의 수를 반환
function meltCheese() {
  const meltTarget = [];
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (graph[x][y] === 0) continue;

      let airCount = 0;
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (possible(nx, ny) && isOutSideAir[nx][ny]) {
          airCount++;
        }

        if (airCount >= 2) {
          meltTarget.push([x, y]);
        }
      }
    }
  }

  for (const [x, y] of meltTarget) {
    graph[x][y] = 0;
  }

  return meltTarget.length;
}

function findMeltTime() {
  let meltTime = 0;

  while (true) {
    // 외부 공기 찾기
    findOutSideAir();

    // 치즈를 녹이고 녹인 치즈가 0개이면 함수 종료
    const meltCount = meltCheese();
    if (meltCount === 0) break;

    // 시간 증가
    meltTime++;
  }

  console.log(meltTime);
}
findMeltTime();

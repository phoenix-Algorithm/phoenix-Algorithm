// 6-2. 뱀

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

// 보드의 크기
const N = Number(input[0]);
const arr = Array.from(new Array(N + 1), () => new Array(N + 1).fill(0));

// 사과의 개수
const K = Number(input[1]);
for (let i = 2; i < K + 2; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  arr[x][y] = 1; // 사과가 있는 곳은 1로 표시
}

// 뱀의 방향 변환 횟수
const L = Number(input[2 + K]);
let info = [];
for (let i = 2 + K + 1; i < 2 + K + 1 + L; i++) {
  let [X, C] = input[i].split(' ');
  info.push([Number(X), C]);
}

// 처음에는 오른쪽을 보고 있으므로 (동, 남, 서, 북)
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
const turn = (direction, c) => {
  if (c === 'L') {
    direction = direction - 1;
    if (direction === -1) {
      direction = 3;
    }
  } else {
    direction = (direction + 1) % 4;
  }
  return direction;
};

let [x, y] = [1, 1]; // 뱀의 머리 위치
arr[x][y] = 2; //뱀이 존재하는 위치는 2로 표시
let direction = 0; // 처음에는 동쪽을 보고 있음
let time = 0; // 시작한 뒤에 지난 '초' 시간
let index = 0; // 다음에 회전할 정보
let queue = new Queue();
queue.enqueue([x, y]); // 뱀이 차지하고 있는 위치 정보 (꼬리가 앞쪽)

while (true) {
  let nx = x + dx[direction];
  let ny = y + dy[direction];
  if (1 <= nx && nx <= N && 1 <= ny && ny <= N && arr[nx][ny] !== 2) {
    // 맵 범위 안에 있고, 뱀의 몸통이 없으면
    if (arr[nx][ny] === 0) {
      // 사과가 없다면 이동 후에 꼬리 제거
      arr[nx][ny] = 2;
      queue.enqueue([nx, ny]);
      let [px, py] = queue.dequeue();
      arr[px][py] = 0;
    }
    if (arr[nx][ny] === 1) {
      // 사과가 있다면 이동 후에 꼬리 그대로 두기
      arr[nx][ny] = 2;
      queue.enqueue([nx, ny]);
    }
  } else {
    // 벽이나 뱀의 몸통과 부딪혔다면
    time += 1;
    break;
  }
  [x, y] = [nx, ny]; // 다음 위치로 머리를 이동
  time += 1;
  if (index < L && time === info[index][0]) {
    // 회전할 시간인 경우 회전
    direction = turn(direction, info[index][1]);
    index += 1;
  }
}
console.log(time);

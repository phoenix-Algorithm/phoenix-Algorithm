// 5-1. 치즈

// 강의 풀이 약간 참고했습니다.
// 거의 다 풀었는데 아쉽네요ㅜㅜㅜ

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

// NxM 모눈 종이
const [N, M] = input[0].split(' ').map(Number);

// 치즈 개수
let cheese = 0;
// 모든 종이 위 치즈
const graph = [];
for (let i = 1; i <= N; i++) {
  line = input[i].split(' ').map(Number);
  cheese += line.filter(element => 1 === element).length;
  graph.push(line);
}

// 모든 치즈가 녹는데 걸리는 시간
let answer = 0;

// 상하좌우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

while (cheese > 0) {
  let visited = Array.from(new Array(N), () => new Array(M).fill(false));
  visited[0][0] = true;

  let queue = new Queue();
  queue.enqueue([0, 0]);

  while (queue.getLength() !== 0) {
    const [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (!visited[nx][ny]) {
          if (graph[nx][ny] >= 1) {
            graph[nx][ny] += 1;
          } else {
            queue.enqueue([nx, ny]);
            visited[nx][ny] = true;
          }
        }
      }
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] >= 3) {
        cheese--;
        graph[i][j] = 0;
      } else if (graph[i][j] == 2) {
        graph[i][j] = 1;
      }
    }
  }
  answer++;
}

console.log(answer);

// 6-1. 인구 이동

/* 거의 다 왔는데 연합된 나라들을 찾는 과정에서 막혀서 강의 답안 봤습니다ㅜ */

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

const bfs = (x, y, index, union) => {
  let united = [[x, y]]; // (x, y)의 위치와 연결된 나라(연합) 정보를 담는 리스트
  let q = new Queue();
  q.enqueue([x, y]);
  union[x][y] = index; // 현재 연합의 번호 할당
  let summary = graph[x][y]; // 현재 연합의 전체 인구 수
  let cnt = 1; // 현재 연합의 국가 수

  while (q.getLength() !== 0) {
    let [x, y] = q.dequeue();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < N && ny >= 0 && ny < N && union[nx][ny] === -1) {
        const peopleDiff = Math.abs(graph[nx][ny] - graph[x][y]);
        if (peopleDiff >= L && peopleDiff <= R) {
          q.enqueue([nx, ny]);
          union[nx][ny] = index; // 연합에 추가하기
          summary += graph[nx][ny];
          cnt += 1;
          united.push([nx, ny]);
        }
      }
    }
  }
  for (let unit of united) {
    // 연합 국가끼리 인구를 분배
    let [i, j] = unit;
    graph[i][j] = parseInt(summary / cnt);
  }
};

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [N, L, R] = input[0].split(' ').map(Number);

graph = [];
for (let i = 1; i <= N; i++) {
  graph.push(input[i].split(' ').map(Number));
}

let queue = new Queue();
queue.enqueue([0, 0]);

let visited = Array.from(new Array(N), () => new Array(N).fill(false));
visited[0][0] = true;

// 상하좌우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let totalCount = 0;

while (true) {
  let union = Array.from(Array(N), () => Array(N).fill(-1));
  let index = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (union[i][j] === -1) {
        bfs(i, j, index, union);
        index++;
      }
    }
  }
  if (index === N * N) break; // 모든 인구 이동이 끝난 경우
  totalCount += 1;
}

console.log(totalCount);

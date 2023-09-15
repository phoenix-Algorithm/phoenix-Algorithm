// 5-2. 연구소

// 강의 풀이
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let graph = [];
let temp = [];
for (let i = 1; i <= N; i++) {
  graph.push(input[i].split(' ').map(Number));
  temp.push(new Array(M).fill(0));
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let result = 0;

// 바이러스 퍼뜨리는 함수
const virus = (x, y) => {
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      if (temp[nx][ny] === 0) {
        temp[nx][ny] = 2;
        virus(nx, ny);
      }
    }
  }
};

// 안전 영역을 세는 함수
const getScore = () => {
  let score = 0;
  for (x = 0; x < N; x++) {
    for (y = 0; y < M; y++) {
      if (temp[x][y] === 0) {
        score++;
      }
    }
  }
  return score;
};

const dfs = count => {
  // 벽을 3개 세웠으면 바이러스를 퍼뜨리고 안전영역 구하기
  if (count === 3) {
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < M; y++) {
        temp[x][y] = graph[x][y];
      }
    }
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < M; y++) {
        if (temp[x][y] === 2) {
          virus(x, y);
        }
      }
    }
    result = Math.max(result, getScore());
    return;
  }
  // 벽이 3개가 안되면 차례대로 벽 세우기
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (graph[x][y] === 0) {
        graph[x][y] = 1;
        dfs(count + 1);
        graph[x][y] = 0;
      }
    }
  }
};

dfs(0);
console.log(result);

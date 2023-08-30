// 1-2. 유기농 배추

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const testCase = Number(input.shift());
// 상하좌우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// dfs 함수
const dfs = (x, y, M, N, arr, visited) => {
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      if (arr[nx][ny] && !visited[nx][ny]) {
        dfs(nx, ny, M, N, arr, visited);
      }
    }
  }
};
for (let tc = 0; tc < testCase; tc++) {
  // 가로, 세로, 배추 개수
  const [M, N, K] = input.shift().split(' ').map(Number);
  // 배추 배열과 방문 여부 배열
  const arr = [];
  const visited = [];
  for (let i = 0; i < N; i++) {
    arr.push(new Array(M).fill(0));
    visited.push(new Array(M).fill(false));
  }
  // 배추 배열 채우기
  for (let i = 0; i < K; i++) {
    const [y, x] = input.shift().split(' ').map(Number);
    arr[x][y] += 1;
  }

  let count = 0;
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      // 새로운 1을 만날 때마다 count 더해주기
      if (arr[x][y] && !visited[x][y]) {
        count++;
        dfs(x, y, M, N, arr, visited);
      }
    }
  }
  console.log(count);
}

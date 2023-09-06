const fs = require('fs');
let [N, ...map] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
N = Number(N);
map = map.map((v) => v.split('').map(Number));

const visited = Array.from(Array(N), () => Array(N).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function dfs(x, y) {
  // 방문처리
  visited[x][y] = true;
  // 단지 내 집의 수 증가
  group[groupCount]++;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    // 재귀함수 호출이 가능하고 방문하지 않았다면 재귀함수 호출
    if (possible(nx, ny) && !visited[nx][ny]) {
      dfs(nx, ny);
    }
  }

  // 재귀함수 호출이 가능한지 확인하는 함수
  function possible(x, y) {
    if (x < 0 || x >= N || y < 0 || y >= N) return false;
    if (map[x][y] === 0) return false;
    return true;
  }
}

const group = [];
let groupCount = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j] && map[i][j] === 1) {
      group.push(0);
      dfs(i, j, groupCount);
      // 단지 수 증가
      groupCount++;
    }
  }
}

console.log(groupCount);
console.log(group.sort((a, b) => a - b).join('\n'));

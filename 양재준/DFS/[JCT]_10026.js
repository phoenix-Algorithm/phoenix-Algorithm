let [N, ...data] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
N = +N;
data = data.map((el) => el.trim().split(''));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const visited = Array.from(Array(N), () => Array(N).fill(false));
const visited2 = Array.from(Array(N), () => Array(N).fill(false));

// 적록색약아님
let countRGB = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (visited[i][j]) continue;
    dfs1(i, j);
    countRGB++;
  }
}

// 적록색약
let countRB = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (visited2[i][j]) continue;
    dfs2(i, j);
    countRB++;
  }
}
console.log(countRGB + ' ' + countRB);

function possible1(x, y, nx, ny) {
  if (nx < 0 || ny < 0 || nx >= N || ny >= N) return false;
  if (data[x][y] !== data[nx][ny]) return false;
  return true;
}
function dfs1(x, y) {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (possible1(x, y, nx, ny) && !visited[nx][ny]) {
      dfs1(nx, ny);
    }
  }
}

function possible2(x, y, nx, ny) {
  if (nx < 0 || ny < 0 || nx >= N || ny >= N) return false;
  if (data[x][y] == 'R' || data[x][y] == 'G') {
    if (data[nx][ny] == 'R' || data[nx][ny] == 'G') return true;
  }
  if (data[x][y] !== data[nx][ny]) return false;
  return true;
}
function dfs2(x, y) {
  visited2[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (possible2(x, y, nx, ny) && !visited2[nx][ny]) {
      dfs2(nx, ny);
    }
  }
}

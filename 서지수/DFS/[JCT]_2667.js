// 3-2. 단지번호붙이기

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]);
arr = [];
visited = [];
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split('').map(Number));
  visited.push(new Array(N).fill(false));
}
let count = 0;

const dfs = (x, y, num) => {
  visited[x][y] = true;
  num++;
  for (let i = 0; i < 4; i++) {
    nx = x + dx[i];
    ny = y + dy[i];
    if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
      if (arr[nx][ny] && !visited[nx][ny]) {
        num = dfs(nx, ny, num);
      }
    }
  }
  return num;
};

numArr = [];
let num = 0;

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    if (arr[x][y] && !visited[x][y]) {
      count++;
      numArr.push(dfs(x, y, 0));
    }
  }
}

console.log(count);
console.log(numArr.sort((a, b) => a - b).join('\n'));

// 5-1. 적록색약

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]);
const arr = [];
const bArr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(''));
  bArr.push(input[i].replace(/R/g, 'G').split(''));
}

let AVisited = Array.from(Array(N), () => new Array(N).fill(false));
let BVisited = Array.from(Array(N), () => new Array(N).fill(false));
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let aCount = 0;
let bCount = 0;

const dfs = (arr, x, y, visited) => {
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
      if (arr[x][y] === arr[nx][ny] && !visited[nx][ny]) {
        dfs(arr, nx, ny, visited);
      }
    }
  }
};

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    if (!AVisited[x][y]) {
      aCount++;
      dfs(arr, x, y, AVisited);
    }
    if (!BVisited[x][y]) {
      bCount++;
      dfs(bArr, x, y, BVisited);
    }
  }
}

console.log(aCount, bCount);

// 2667 아파트 문제에서
// dfs를 조금 수정해서 만들었는데
// 배열을 2번 만들어서 억지로 푼 느낌이 있어 조금 아쉽습니다.

let fs = require("fs");
let input = fs.readFileSync("dev/stdin.txt").toString().split("\n");

let n = Number(input[0]);

let grid = []; // apart
let output = [];

for (let i = 1; i <= n; i++) {
  grid[i - 1] = [];
  let arr = [...input[i].split("")];
  for (let j = 0; j < n; j++) {
    grid[i - 1][j] = arr[j];
  }
}

let result = [];
let answer = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (grid[i][j]) {
      answer.push(grid[i][j]);
      dfs(grid, i, j, n, grid[i][j]);
      result = [];
    }
  }
}
output.push(answer.length);

for (let i = 1; i <= n; i++) {
  grid[i - 1] = [];
  let arr = [...input[i].split("")];
  for (let j = 0; j < n; j++) {
    if (arr[j] == "G") grid[i - 1][j] = "R";
    else grid[i - 1][j] = arr[j];
  }
}

result = [];
answer = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (grid[i][j]) {
      answer.push(grid[i][j]);
      dfs(grid, i, j, n, grid[i][j]);
      result = [];
    }
  }
}
output.push(answer.length);
console.log(output.join(" "));

function dfs(grid, x, y, n, k) {
  if (x <= -1 || x >= n || y <= -1 || y >= n) return false;
  if (grid[x][y] == k) {
    result.push([x, y]);
    grid[x][y] = 0;
    dfs(grid, x - 1, y, n, k);
    dfs(grid, x, y - 1, n, k);
    dfs(grid, x + 1, y, n, k);
    dfs(grid, x, y + 1, n, k);
    return true;
  }
  return false;
}

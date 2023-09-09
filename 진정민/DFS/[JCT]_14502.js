// 아이디어 1. 백트래킹으로 0 좌표를 모두 구하고
// 그 중 3개만 골라 벽을 치고 안전영역을 구하여 최대값을 구한다.

// 접근 방법은 괜찮았던 것 같은데 복잡하게 코드를 짜다가 내가 짠 코드를 이해를 못해
// 결국 강의를 보고 해결했습니다 !

let fs = require("fs");
let input = fs.readFileSync("dev/stdin.txt").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let lab = [];
let copy = [];

for (let i = 1; i <= n; i++) {
  lab[i - 1] = [...input[i].split(" ").map(Number)];
  copy.push(new Array(m).fill(0));
}

function count(arr) {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] == 0) cnt++;
    }
  }
  return cnt;
}

let coordinate = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function virus(x, y) {
  for (xy of coordinate) {
    let nx = x + xy[0];
    let ny = y + xy[1];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (copy[nx][ny] == 0) {
      copy[nx][ny] = 2;
      virus(nx, ny);
    }
  }
}

let answer = 0;

function dfs(depth) {
  if (depth == 3) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        copy[i][j] = lab[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (copy[i][j] == 2) virus(i, j);
      }
    }
    answer = Math.max(answer, count(copy));
    return;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (lab[i][j] == 0) {
        lab[i][j] = 1;
        dfs(depth + 1);
        lab[i][j] = 0;
      }
    }
  }
}

dfs(0);
console.log(answer);

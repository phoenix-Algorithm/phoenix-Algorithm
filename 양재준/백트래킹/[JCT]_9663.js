const fs = require('fs');
let N = Number(fs.readFileSync('dev/stdin').toString());

let cnt = 0;
let queens = [];

function possible(x, y) {
  for (let [a, b] of queens) {
    if (a === x || b === y) return false;
    if (Math.abs(x - a) === Math.abs(y - b)) return false;
  }
  return true;
}

function dfs(depth) {
  if (depth === N) {
    cnt++;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!possible(depth, i)) continue;
    queens.push([depth, i]);
    dfs(depth + 1);
    queens.pop();
  }
}

dfs(0);
console.log(cnt);

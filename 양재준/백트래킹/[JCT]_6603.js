const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');
const len = input.length;

let visited = Array(50).fill(false);
let result = [];
function dfs(depth, start, data) {
  if (depth === 6) {
    console.log(...result);
    return;
  }

  for (let j = start; j < data.length; j++) {
    const num = data[j];
    if (visited[num]) continue;
    visited[num] = true;
    result.push(num);
    dfs(depth + 1, j, data);
    result.pop();
    visited[num] = false;
  }
}

for (let i = 0; i < len; i++) {
  const [k, ...data] = input[i].split(' ').map(Number);
  if (k === 0) break;

  result = [];
  dfs(0, 0, data);
  console.log();
}

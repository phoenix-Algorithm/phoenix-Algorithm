const fs = require('fs');
const [N] = fs.readFileSync('dev/stdin').toString().split(' ').map(Number);

let num = Array(N)
  .fill()
  .map((v, i) => i + 1); // [1,2,3, ... , N]
let seq = [];
let visited = Array(N).fill(false);
let answer = '';

function dfs(depth) {
  if (depth === N) {
    answer += seq.join(' ') + '\n';
    return;
  }

  for (let i = 0; i < num.depth; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    seq.push(i + 1);
    dfs(depth + 1);
    seq.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(answer);

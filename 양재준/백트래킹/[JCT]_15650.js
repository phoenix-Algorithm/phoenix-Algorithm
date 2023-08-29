const fs = require('fs');
const [N, M] = fs.readFileSync('dev/stdin').toString().split(' ').map(Number);

let seq = [];
let visited = Array(N).fill(false);
let answer = [];

function dfs(depth) {
  if (depth === M) {
    let compare = [...seq];
    if (JSON.stringify(seq) === JSON.stringify(compare.sort())) {
      answer += seq.join(' ') + '\n';
      return;
    }
  }

  for (let i = 0; i < N; i++) {
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

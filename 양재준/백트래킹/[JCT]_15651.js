const fs = require('fs');
const [N, M] = fs.readFileSync('dev/stdin').toString().split(' ').map(Number);

let seq = [];
let answer = [];

function dfs(depth) {
  if (depth === M) {
    answer += seq.join(' ') + '\n';
    return;
  }

  for (let i = 0; i < N; i++) {
    seq.push(i + 1);
    dfs(depth + 1);
    seq.pop();
  }
}

dfs(0);
console.log(answer);

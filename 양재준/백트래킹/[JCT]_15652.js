const fs = require('fs');
const [N, M] = fs.readFileSync('dev/stdin').toString().split(' ').map(Number);

let seq = [];
let answer = '';

function dfs(depth, start) {
  if (depth === M) {
    answer += seq.join(' ') + '\n';
    return;
  }

  for (let i = start; i < N + 1; i++) {
    seq.push(i);
    dfs(depth + 1, i);
    seq.pop();
  }
}

dfs(0, 1);
console.log(answer);

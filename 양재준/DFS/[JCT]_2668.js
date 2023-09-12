const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let N = +input[0];

let visited;
let done;
let arr = [0];
let cnt = 0;
let answer = [];

visited = Array(N + 1).fill(false);
done = Array(N + 1).fill(false);

for (let i = 1; i <= N; i++) {
  arr.push(+input[i]);
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) dfs(i);
}

console.log(answer.length);
answer.sort((a, b) => a - b);
for (let i = 0; i < answer.length; i++) {
  console.log(answer[i]);
}

function dfs(node) {
  visited[node] = true;
  const next = arr[node];

  if (!visited[next]) {
    dfs(next);
  } else if (!done[next]) {
    for (let i = next; i !== node; i = arr[i]) {
      answer.push(i);
    }
    answer.push(node);
  }

  done[node] = true;
}

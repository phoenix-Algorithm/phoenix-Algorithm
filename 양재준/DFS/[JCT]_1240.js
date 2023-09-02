const fs = require('fs');
let [NM, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [N, M] = NM.split(' ').map(Number);

const tree = Array.from(Array(N + 1), () => Array());

for (let i = 0; i < N - 1; i++) {
  const [a, b, length] = input.shift().split(' ').map(Number);
  tree[a].push([b, length]);
  tree[b].push([a, length]);
}

for (let i = 0; i < M; i++) {
  const [a, b] = input.shift().split(' ').map(Number);
  console.log(dfs(a, b));
}

function dfs(start, end) {
  const visited = Array(N + 1).fill(false);
  const stack = [[start, 0]];
  let distance = 0;

  while (stack.length) {
    const [node, length] = stack.pop();
    visited[node] = true;

    if (node === end) {
      distance = length;
      break;
    }

    for (let i = 0; i < tree[node].length; i++) {
      const [next, nextLength] = tree[node][i];

      if (!visited[next]) {
        stack.push([next, length + nextLength]);
      }
    }
  }

  return distance;
}

const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let index = 0;
let caseCount = 0;
while (true) {
  const [N, M] = input[index++].split(' ').map(Number);
  if (N === 0 && M === 0) break;
  else caseCount++;

  const tree = Array.from(Array(N + 1), () => Array());
  const visited = Array(N + 1).fill(false);

  for (let i = 0; i < M; i++) {
    const [a, b] = input[index++].split(' ').map(Number);
    tree[a].push(b);
    tree[b].push(a);
  }

  function hasCycle(node, parent) {
    visited[node] = true;

    for (let i = 0; i < tree[node].length; i++) {
      const next = tree[node][i];

      if (!visited[next]) {
        if (hasCycle(next, node)) return true;
      } else if (next !== parent) {
        return true;
      }
    }

    return false;
  }

  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      if (!hasCycle(i, null)) count++;
    }
  }

  let result = `Case ${caseCount}: `;
  if (count === 0) {
    result += 'No trees.';
  } else if (count === 1) {
    result += 'There is one tree.';
  } else {
    result += `A forest of ${count} trees.`;
  }
  console.log(result);
}

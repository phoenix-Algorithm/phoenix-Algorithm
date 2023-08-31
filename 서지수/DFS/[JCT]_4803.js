// 2-2. 트리

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const dfs = (x, prev) => {
  visited[x] = true;
  for (let next of arr[x]) {
    if (!visited[next]) {
      if (dfs(next, x)) return true;
    } else if (next != prev) {
      return true;
    }
  }
  return false;
};

let i = 0;
let start = 1;
while (true) {
  let [n, m] = input[i].split(' ').map(Number);
  if (n === 0 && m === 0) {
    break;
  }
  arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push([]);
  }
  visited = new Array(n + 1).fill(false);
  for (let s = 1; s <= m; s++) {
    let [x, y] = input[i + s].split(' ').map(Number);
    arr[x].push(y);
    arr[y].push(x);
  }
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      if (!dfs(i, 0)) count++;
    }
  }

  if (count === 0) console.log(`Case ${start}: No trees.`);
  else if (count === 1) console.log(`Case ${start}: There is one tree.`);
  else console.log(`Case ${start}: A forest of ${count} trees.`);
  i += m + 1;
  start++;
}

let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

function dfs(graph, x, y, selected) {
  if (graph[x][y] == 1) {
    let c = 0;
    for (let i = 0; i < selected.length; i++) {
      let a = Math.abs(selected[i][0] - x) + Math.abs(selected[i][1] - y);
      c = c === 0 ? a : Math.min(a, c);
    }
    return c;
  }
  return 0;
}
const [n, m] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 1; i < n + 1; i++) {
  graph.push(input[i].split(' ').map(Number));
}
let chicken = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === 2) {
      chicken.push([i, j]);
    }
  }
}
let selected = [];
let cost = 0;
let min_cost = 0;
function select(depth, start, m) {
  if (depth == m) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        cost += dfs(graph, i, j, selected);
      }
    }
    min_cost = min_cost === 0 ? cost : Math.min(cost, min_cost);
    cost = 0;
  }
  for (let i = start; i < chicken.length; i++) {
    // 모든 조합 계산
    if (selected.includes(chicken[i])) continue;
    selected.push(chicken[i]);
    select(depth + 1, i + 1, m); // 재귀 함수 호출
    selected.pop();
  }
}

select(0, 0, m);
console.log(min_cost);

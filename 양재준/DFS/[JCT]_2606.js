const fs = require('fs');
let [N, pairs, ...input] = fs.readFileSync('dev/stdin').toString().split('\n');

N = Number(N);
pairs = Number(pairs);

let graph = Array(N + 1)
  .fill()
  .map(() => []);

input = input.map((el) => el.split(' ').map(Number));
for (let i = 0; i < pairs; i++) {
  const [a, b] = input[i];
  graph[a].push(b);
  graph[b].push(a);
}

let visited = Array(pairs + 1).fill(false);

function dfs(graph, v, visited) {
  visited[v] = true;
  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}

dfs(graph, 1, visited);

console.log(visited.filter((el) => el).length - 1);

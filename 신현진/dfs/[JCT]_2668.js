let fs = require("fs");
let [n, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

n = +n;
let graph = [];
let visited = new Array(n + 1).fill(false);
let finished = new Array(n + 1).fill(false);
let result = [];

graph[0] = 0;
for (let i = 0; i < input.length; i++) {
  graph.push(+input[i]);
}

function dfs(x, graph, visited, finished, result) {
  visited[x] = true;
  let y = graph[x];
  if (!visited[y]) dfs(y, graph, visited, finished, result);
  else if (!finished[y]) {
    while (x != y) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finished[x] = true;
}

for (let x = 1; x <= n; x++) {
  if (!visited[x]) dfs(x, graph, visited, finished, result);
}
console.log(result.length);
console.log(result.sort((a, b) => a - b).join("\n"));

let fs = require("fs");
let [n, m, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
n = +n;
m = +m;

let graph = [];
let visited = new Array(n + 1).fill(false);
let answer = 0;

for (let i = 0; i < m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  if (!graph[a]) graph[a] = [];
  if (!graph[b]) graph[b] = [];
  graph[a].push(b);
  graph[b].push(a);
}

function dfs(graph, v, visited) {
  visited[v] = true;
  answer++;

  for (i of graph[v] || []) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}

dfs(graph, 1, visited);
console.log(answer - 1);

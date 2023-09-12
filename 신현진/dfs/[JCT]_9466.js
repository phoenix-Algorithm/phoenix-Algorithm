//강의 코드 봄

let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let tc = +input[0];
let line = 1;

function dfs(x, graph, visited, finished, result) {
  visited[x] = true;
  //다음 노드
  let y = graph[x];
  if (!visited[y]) dfs(y, graph, visited, finished, result);
  else if (!finished[y]) {
    while (y != x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finished[x] = true;
}

while (tc--) {
  let n = +input[line];
  let graph = [0, ...input[line + 1].split(" ").map(Number)];

  let visited = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);
  let result = [];

  for (let x = 1; x <= n; x++) {
    if (!visited[x]) dfs(x, graph, visited, finished, result);
  }
  line += 2;
  console.log(n - result.length);
}

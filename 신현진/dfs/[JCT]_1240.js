//강의답안 봄
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let graph = [];
graph[0] = [];

for (let i = 1; i <= n - 1; i++) {
  let [a, b, c] = input[i].split(" ").map(Number);
  if (!graph[a]) graph[a] = [];
  if (!graph[b]) graph[b] = [];

  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

function dfs(x, dist) {
  if (visited[x]) return;
  visited[x] = true;
  distance[x] = dist;
  //하위에 있는 노드(y)들 찾아가기 dist+c:총 거리
  for (let [y, c] of graph[x]) dfs(y, dist + c);
}

for (let i = 0; i < m; i++) {
  let [x, y] = input[n + i].split(" ").map(Number);
  visited = new Array(n + 1).fill(false);
  distance = new Array(n + 1).fill(-1);
  dfs(x, 0);
  console.log(distance[y]);
}

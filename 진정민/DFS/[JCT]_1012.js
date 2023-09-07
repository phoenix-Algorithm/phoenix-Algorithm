// 약 2시간 정도 소모해서 풀어보았는데
// 틀렸다고 나오네요..
// 반례를 못 찾았습니다 다시 풀어보려고요

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let t = Number(input[0]);
let line = 1;
while (t--) {
  let [m, n, k] = input[line].split(" ").map(Number);
  line++;

  let graph = [];
  for (let i = 0; i < m; i++) {
    graph[i] = [];
    for (let j = 0; j < n; j++) {
      graph[i].push(0);
    }
  }

  for (let i = 0; i < k; i++) {
    [a, b] = input[line].split(" ").map(Number);
    graph[a][b] = 1;
    line++;
  }

  let answer = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(graph, i, j, n, m)) answer++;
    }
  }
  console.log(answer);
}

function dfs(graph, startx, starty, n, m) {
  if (graph[startx][starty] == 1) {
    graph[startx][starty] = 0;
    if (startx - 1 > 0) {
      dfs(graph, startx - 1, starty, n, m);
    }
    if (starty - 1 > 0) {
      dfs(graph, startx, starty - 1, n, m);
    }
    if (startx + 1 < m) {
      dfs(graph, startx + 1, starty, n, m);
    }
    if (starty + 1 < n) {
      dfs(graph, startx, starty + 1, n, m);
    }
    return true;
  }
  return false;
}

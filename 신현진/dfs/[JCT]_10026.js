let fs = require("fs");
let [n, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

n = +n;
let notBlind = [];
let blind = [];

let colorArr = ["R", "G", "B"];

let notBlindCount = 0;
let blindCount = 0;

for (let i = 0; i < n; i++) {
  notBlind.push(input[i].trim("\r").split(""));
  blind.push(input[i].trim("\r").replaceAll("R", "G").split(""));
}

function dfs(graph, n, x, y, color) {
  //범위를 벗어나는 경우 종료
  if (x <= -1 || x >= n || y <= -1 || y >= n) return false;
  if (graph[x][y] == color) {
    //방문완료했다고 -1로 나타냄
    graph[x][y] = -1;

    //상하좌우도 재귀적으로 호출
    dfs(graph, n, x - 1, y, color);
    dfs(graph, n, x, y - 1, color);
    dfs(graph, n, x + 1, y, color);
    dfs(graph, n, x, y + 1, color);
    return true;
  }
  return false;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let color of colorArr) {
      if (dfs(notBlind, n, i, j, color)) notBlindCount++;
      if (dfs(blind, n, i, j, color)) blindCount++;
    }
  }
}

console.log(notBlindCount + " " + blindCount);

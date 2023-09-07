// 1012번 유기농 배추 문제에서
// 연결된 집의 합을 구하는 식으로 바꾸어 풀었습니다.

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);

let apart = []; // apart

for (let i = 1; i <= n; i++) {
  apart[i - 1] = [];
  let arr = [...input[i].split("").map(Number)];
  for (let j = 0; j < n; j++) {
    apart[i - 1][j] = arr[j];
  }
}

let result = [];
let answer = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(apart, i, j, n)) {
      answer.push(result.length);
      result = [];
    }
  }
}

console.log(answer.length);
answer.sort((a, b) => {
  return a - b;
});

for (x of answer) {
  console.log(x);
}

function dfs(graph, x, y, n) {
  if (x <= -1 || x >= n || y <= -1 || y >= n) return false;
  if (graph[x][y] == 1) {
    result.push([x, y]);
    graph[x][y] = -1;
    dfs(graph, x - 1, y, n);
    dfs(graph, x, y - 1, n);
    dfs(graph, x + 1, y, n);
    dfs(graph, x, y + 1, n);
    return true;
  }
  return false;
}
